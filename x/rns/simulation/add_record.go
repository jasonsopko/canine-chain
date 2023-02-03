package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/jackalLabs/canine-chain/x/rns/keeper"
	"github.com/jackalLabs/canine-chain/x/rns/types"
)

func SimulateMsgAddRecord(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		// 1. Find a registered domain name
		// 2. Add a randomly generated subdomain -- subdomains are free
		// choosing a random account WITH registered domains
		var simAccount simtypes.Account
		var names []types.Names
		simAccount, _ = simtypes.RandomAcc(r, accs)
		// checking if any names are registered
		exists := k.CheckExistence(ctx)
		if !exists {
			return simtypes.NoOpMsg(types.ModuleName, types.TypeMsgList, "No domains registered yet"), nil, nil
		}
		for {
			// finding all registered domain names
			wctx := sdk.WrapSDKContext(ctx)
			nReq := &types.QueryListOwnedNamesRequest{
				Address: simAccount.Address.String(),
			}
			// requesting the domain names
			regNames, err := k.ListOwnedNames(wctx, nReq)
			if err != nil {
				return simtypes.NoOpMsg(types.ModuleName, types.TypeMsgList, "Couldn't request names"), nil, nil
			}
			names = regNames.GetNames()
			if names != nil {
				break
			} else {
				simAccount, _ = simtypes.RandomAcc(r, accs)
			}
		}
		// initializing the message
		msg := &types.MsgAddRecord{
			Creator: simAccount.Address.String(),
		}

		// choosing a random name
		nameI := simtypes.RandIntBetween(r, 0, len(names))
		name := names[nameI]

		// generating a random subdomain
		nameLength := simtypes.RandIntBetween(r, 1, 10)
		subdomain := StringWithCharset(r, nameLength, charset) // charset is a const defined in utils.go

		// checking if the subdomain exists on the domain
		for _, sd := range name.Subdomains {
			if sd.Name == subdomain {
				// can add a randomizer, but very unlikely a randomly generated subdomain name is already on-chain
				return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Subdomain is already registered"), nil, nil
			}
		}

		// generating the fees
		price := sdk.NewInt(0)
		spendable := bk.SpendableCoins(ctx, simAccount.Address)
		coins, hasNeg := spendable.SafeSub(sdk.NewCoins(sdk.NewCoin("ujkl", price)))

		var fees sdk.Coins

		if !hasNeg {
			var err error
			fees, err = simtypes.RandomFees(r, ctx, coins)
			if err != nil {
				return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "unable to generate fees"), nil, err
			}
		}

		// building the message
		msg.Name = name.Name + "." + name.Tld
		msg.Record = subdomain
		msg.Value = "1"
		msg.Data = "{}"

		txCtx := simulation.OperationInput{
			R:             r,
			App:           app,
			TxGen:         simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:           nil,
			Msg:           msg,
			MsgType:       msg.Type(),
			Context:       ctx,
			SimAccount:    simAccount,
			AccountKeeper: ak,
			ModuleName:    types.ModuleName,
		}

		return simulation.GenAndDeliverTx(txCtx, fees)
	}

}
