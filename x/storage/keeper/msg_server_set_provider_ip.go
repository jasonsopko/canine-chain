package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jackalLabs/canine-chain/x/storage/types"
)

func (k msgServer) SetProviderIP(goCtx context.Context, msg *types.MsgSetProviderIP) (*types.MsgSetProviderIPResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	provider, found := k.GetProviders(ctx, msg.Creator)

	if !found {
		provider = types.Providers{
			Address:         msg.Creator,
			Ip:              "",
			Totalspace:      "0",
			Creator:         msg.Creator,
			BurnedContracts: "0",
		}
	}

	provider.Ip = msg.Ip

	k.SetProviders(ctx, provider)

	return &types.MsgSetProviderIPResponse{}, nil
}