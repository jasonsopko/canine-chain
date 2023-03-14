package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	cryptocodec "github.com/cosmos/cosmos-sdk/crypto/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgPostContract{}, "storage/PostContract", nil)
	cdc.RegisterConcrete(&MsgPostproof{}, "storage/Postproof", nil)
	cdc.RegisterConcrete(&MsgSignContract{}, "storage/SignContract", nil)
	cdc.RegisterConcrete(&MsgSetProviderIP{}, "storage/SetProviderIp", nil)
	cdc.RegisterConcrete(&MsgSetProviderTotalspace{}, "storage/SetProviderTotalspace", nil)
	cdc.RegisterConcrete(&MsgInitProvider{}, "storage/InitProvider", nil)
	cdc.RegisterConcrete(&MsgCancelContract{}, "storage/CancelContract", nil)
	cdc.RegisterConcrete(&MsgBuyStorage{}, "storage/BuyStorage", nil)
	cdc.RegisterConcrete(&MsgClaimStray{}, "storage/ClaimStray", nil)
	cdc.RegisterConcrete(&MsgUpgradeStorage{}, "storage/UpgradeStorage", nil)
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPostContract{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPostproof{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSignContract{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetProviderIP{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetProviderTotalspace{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitProvider{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancelContract{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuyStorage{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgClaimStray{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpgradeStorage{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino = codec.NewLegacyAmino()

	// ModuleCdc references the global x/wasm module codec.

	ModuleCdc = codec.NewAminoCodec(amino)
)

func init() {
	RegisterCodec(amino)
	cryptocodec.RegisterCrypto(amino)
	amino.Seal()
}
