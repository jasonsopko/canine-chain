package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/jackal-dao/canine/testutil/keeper"
	"github.com/jackal-dao/canine/testutil/nullify"
	"github.com/jackal-dao/canine/x/rns/keeper"
	"github.com/jackal-dao/canine/x/rns/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBids(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Bids {
	items := make([]types.Bids, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBids(ctx, items[i])
	}
	return items
}

func TestBidsGet(t *testing.T) {
	keeper, ctx := keepertest.RnsKeeper(t)
	items := createNBids(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBids(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBidsRemove(t *testing.T) {
	keeper, ctx := keepertest.RnsKeeper(t)
	items := createNBids(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBids(ctx,
			item.Index,
		)
		_, found := keeper.GetBids(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBidsGetAll(t *testing.T) {
	keeper, ctx := keepertest.RnsKeeper(t)
	items := createNBids(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBids(ctx)),
	)
}