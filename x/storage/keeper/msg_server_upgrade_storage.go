package keeper

import (
	"context"
	"fmt"
	"strconv"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerr "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/jackalLabs/canine-chain/x/storage/types"
)

const (
	timeMonth       = time.Hour * 24 * 30
	gb        int64 = 1_000_000_000
)

func (k Keeper) UpgradeStorage(goCtx context.Context, msg *types.MsgUpgradeStorage) (*types.MsgUpgradeStorageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, err := sdk.AccAddressFromBech32(msg.ForAddress)
	if err != nil {
		return nil, err
	}

	// Get how much credit they have left on the old plan
	payInfo, found := k.GetStoragePaymentInfo(ctx, msg.ForAddress)
	if !found {
		return nil, fmt.Errorf("can't upgrade non-existing storage, please use MsgBuyStorage")
	}

	proratedDurationInHour := payInfo.End.Sub(ctx.BlockTime())
	proratedDuration := sdk.NewDec(int64(proratedDurationInHour)).Quo(sdk.NewDec(int64(timeMonth)))

	if proratedDuration.LTE(sdk.ZeroDec()) {
		return nil, sdkerr.Wrap(sdkerr.ErrInvalidRequest, "old plan is expired, use MsgBuyStorage")
	}

	currentBytes := payInfo.SpaceAvailable
	currentGbs := currentBytes / gb

	oldCost := k.GetStorageCost(ctx, currentGbs, proratedDuration)

	// Get cost of new plan
	duration, err := strconv.ParseInt(msg.Duration, 10, 64)
	if err != nil {
		return nil, fmt.Errorf("duration can't be parsed: %s", err.Error())
	}

	if duration <= 0 {
		return nil, sdkerr.Wrap(sdkerr.ErrInvalidRequest, "duration can't be less than 1 month")
	}

	newBytes, err := strconv.ParseInt(msg.Bytes, 10, 64)
	if err != nil {
		return nil, fmt.Errorf("failed to parse int64: %s", err.Error())
	}

	newGbs := newBytes / gb
	if newGbs <= 0 {
		return nil, sdkerr.Wrap(sdkerr.ErrInvalidRequest, "cannot buy less than a gb")
	}

	newCost := k.GetStorageCost(ctx, newGbs, sdk.NewDec(duration))

	price := newCost.Sub(oldCost)

	if price.LTE(sdk.ZeroInt()) {
		return nil, sdkerr.Wrap(sdkerr.ErrInvalidRequest, "cannot downgrade until current plan expires")
	}

	bytes, err := strconv.ParseInt(msg.Bytes, 10, 64)
	if err != nil {
		return nil, fmt.Errorf("bytes can't be parsed: %s", err.Error())
	}

	denom := msg.PaymentDenom
	if denom != "ujkl" {
		return nil, sdkerr.Wrap(sdkerr.ErrInvalidCoins, "cannot pay with anything other than ujkl")
	}

	priceTokens := sdk.NewCoin(denom, price)

	add, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	err = k.bankkeeper.SendCoinsFromAccountToModule(ctx, add, types.ModuleName, sdk.NewCoins(priceTokens))
	if err != nil {
		return nil, err
	}

	depositAccount, err := sdk.AccAddressFromBech32(k.GetParams(ctx).DepositAccount)
	if err != nil {
		return nil, err
	}

	err = k.bankkeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, depositAccount, sdk.NewCoins(priceTokens))
	if err != nil {
		return nil, err
	}

	timeTotal := timeMonth * time.Duration(duration)
	spi := types.StoragePaymentInfo{
		Start:          ctx.BlockTime(),
		End:            ctx.BlockTime().Add(timeTotal),
		SpaceAvailable: bytes,
		SpaceUsed:      payInfo.SpaceUsed,
		Address:        msg.ForAddress,
	}

	k.SetStoragePaymentInfo(ctx, spi)

	return &types.MsgUpgradeStorageResponse{}, nil
}