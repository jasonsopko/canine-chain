package storage

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jackal-dao/canine/x/storage/keeper"
	"github.com/jackal-dao/canine/x/storage/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the contracts
	for _, elem := range genState.ContractsList {
		k.SetContracts(ctx, elem)
	}
	// Set all the proofs
	for _, elem := range genState.ProofsList {
		k.SetProofs(ctx, elem)
	}
	// Set all the activeDeals
	for _, elem := range genState.ActiveDealsList {
		k.SetActiveDeals(ctx, elem)
	}
	// Set all the miners
	for _, elem := range genState.MinersList {
		k.SetMiners(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ContractsList = k.GetAllContracts(ctx)
	genesis.ProofsList = k.GetAllProofs(ctx)
	genesis.ActiveDealsList = k.GetAllActiveDeals(ctx)
	genesis.MinersList = k.GetAllMiners(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}