// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgSwap } from "./types/lp/tx";
import { MsgWithdrawLPool } from "./types/lp/tx";
import { MsgCreateLPool } from "./types/lp/tx";
import { MsgDepositLPool } from "./types/lp/tx";


export { MsgSwap, MsgWithdrawLPool, MsgCreateLPool, MsgDepositLPool };

type sendMsgSwapParams = {
  value: MsgSwap,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawLPoolParams = {
  value: MsgWithdrawLPool,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateLPoolParams = {
  value: MsgCreateLPool,
  fee?: StdFee,
  memo?: string
};

type sendMsgDepositLPoolParams = {
  value: MsgDepositLPool,
  fee?: StdFee,
  memo?: string
};


type msgSwapParams = {
  value: MsgSwap,
};

type msgWithdrawLPoolParams = {
  value: MsgWithdrawLPool,
};

type msgCreateLPoolParams = {
  value: MsgCreateLPool,
};

type msgDepositLPoolParams = {
  value: MsgDepositLPool,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgSwap({ value, fee, memo }: sendMsgSwapParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSwap: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSwap({ value: MsgSwap.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSwap: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawLPool({ value, fee, memo }: sendMsgWithdrawLPoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawLPool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawLPool({ value: MsgWithdrawLPool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawLPool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateLPool({ value, fee, memo }: sendMsgCreateLPoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateLPool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateLPool({ value: MsgCreateLPool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateLPool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDepositLPool({ value, fee, memo }: sendMsgDepositLPoolParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDepositLPool: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDepositLPool({ value: MsgDepositLPool.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDepositLPool: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgSwap({ value }: msgSwapParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.lp.MsgSwap", value: MsgSwap.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSwap: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawLPool({ value }: msgWithdrawLPoolParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.lp.MsgWithdrawLPool", value: MsgWithdrawLPool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawLPool: Could not create message: ' + e.message)
			}
		},
		
		msgCreateLPool({ value }: msgCreateLPoolParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.lp.MsgCreateLPool", value: MsgCreateLPool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateLPool: Could not create message: ' + e.message)
			}
		},
		
		msgDepositLPool({ value }: msgDepositLPoolParams): EncodeObject {
			try {
				return { typeUrl: "/jackaldao.canine.lp.MsgDepositLPool", value: MsgDepositLPool.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDepositLPool: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			JackaldaoCanineLp: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;