import { Client, registry, MissingWalletError } from 'jackal-dao-canine-client-ts'

import { Files } from "jackal-dao-canine-client-ts/jackaldao.canine.filetree/types"
import { Params } from "jackal-dao-canine-client-ts/jackaldao.canine.filetree/types"
import { Pubkey } from "jackal-dao-canine-client-ts/jackaldao.canine.filetree/types"
import { QueryGetKeyRequest } from "jackal-dao-canine-client-ts/jackaldao.canine.filetree/types"
import { Tracker } from "jackal-dao-canine-client-ts/jackaldao.canine.filetree/types"


export { Files, Params, Pubkey, QueryGetKeyRequest, Tracker };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Encrypt: {},
				Decrypt: {},
				Files: {},
				FilesAll: {},
				GetKeys: {},
				Pubkey: {},
				PubkeyAll: {},
				Tracker: {},
				
				_Structure: {
						Files: getStructure(Files.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						Pubkey: getStructure(Pubkey.fromPartial({})),
						QueryGetKeyRequest: getStructure(QueryGetKeyRequest.fromPartial({})),
						Tracker: getStructure(Tracker.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getEncrypt: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Encrypt[JSON.stringify(params)] ?? {}
		},
				getDecrypt: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Decrypt[JSON.stringify(params)] ?? {}
		},
				getFiles: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Files[JSON.stringify(params)] ?? {}
		},
				getFilesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FilesAll[JSON.stringify(params)] ?? {}
		},
				getGetKeys: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GetKeys[JSON.stringify(params)] ?? {}
		},
				getPubkey: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pubkey[JSON.stringify(params)] ?? {}
		},
				getPubkeyAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PubkeyAll[JSON.stringify(params)] ?? {}
		},
				getTracker: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Tracker[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: jackaldao.canine.filetree initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEncrypt({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryEncrypt( key.address,  key.message)).data
				
					
				commit('QUERY', { query: 'Encrypt', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEncrypt', payload: { options: { all }, params: {...key},query }})
				return getters['getEncrypt']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEncrypt API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDecrypt({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryDecrypt( key.message)).data
				
					
				commit('QUERY', { query: 'Decrypt', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDecrypt', payload: { options: { all }, params: {...key},query }})
				return getters['getDecrypt']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDecrypt API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFiles({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryFiles( key.address,  key.ownerAddress)).data
				
					
				commit('QUERY', { query: 'Files', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFiles', payload: { options: { all }, params: {...key},query }})
				return getters['getFiles']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFiles API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFilesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryFilesAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.JackaldaoCanineFiletree.query.queryFilesAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FilesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFilesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getFilesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFilesAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGetKeys({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryGetKeys( key.hashpath)).data
				
					
				commit('QUERY', { query: 'GetKeys', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGetKeys', payload: { options: { all }, params: {...key},query }})
				return getters['getGetKeys']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGetKeys API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPubkey({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryPubkey( key.address)).data
				
					
				commit('QUERY', { query: 'Pubkey', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPubkey', payload: { options: { all }, params: {...key},query }})
				return getters['getPubkey']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPubkey API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPubkeyAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryPubkeyAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.JackaldaoCanineFiletree.query.queryPubkeyAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PubkeyAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPubkeyAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPubkeyAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPubkeyAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTracker({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.JackaldaoCanineFiletree.query.queryTracker()).data
				
					
				commit('QUERY', { query: 'Tracker', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTracker', payload: { options: { all }, params: {...key},query }})
				return getters['getTracker']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTracker API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgPostFile({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.JackaldaoCanineFiletree.tx.sendMsgPostFile({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPostFile:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPostFile:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddViewers({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.JackaldaoCanineFiletree.tx.sendMsgAddViewers({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddViewers:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddViewers:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgInitAccount({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.JackaldaoCanineFiletree.tx.sendMsgInitAccount({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInitAccount:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgInitAccount:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteFile({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.JackaldaoCanineFiletree.tx.sendMsgDeleteFile({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteFile:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteFile:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPostkey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.JackaldaoCanineFiletree.tx.sendMsgPostkey({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPostkey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPostkey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgPostFile({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.JackaldaoCanineFiletree.tx.msgPostFile({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPostFile:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPostFile:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddViewers({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.JackaldaoCanineFiletree.tx.msgAddViewers({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddViewers:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAddViewers:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgInitAccount({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.JackaldaoCanineFiletree.tx.msgInitAccount({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInitAccount:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgInitAccount:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteFile({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.JackaldaoCanineFiletree.tx.msgDeleteFile({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteFile:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteFile:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPostkey({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.JackaldaoCanineFiletree.tx.msgPostkey({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPostkey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPostkey:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}