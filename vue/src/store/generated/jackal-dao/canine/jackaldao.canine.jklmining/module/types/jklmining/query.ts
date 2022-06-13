/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../jklmining/params";
import { SaveRequests } from "../jklmining/save_requests";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "jackaldao.canine.jklmining";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSaveRequestsRequest {
  index: string;
}

export interface QueryGetSaveRequestsResponse {
  saveRequests: SaveRequests | undefined;
}

export interface QueryAllSaveRequestsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSaveRequestsResponse {
  saveRequests: SaveRequests[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetSaveRequestsRequest: object = { index: "" };

export const QueryGetSaveRequestsRequest = {
  encode(
    message: QueryGetSaveRequestsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSaveRequestsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSaveRequestsRequest,
    } as QueryGetSaveRequestsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSaveRequestsRequest {
    const message = {
      ...baseQueryGetSaveRequestsRequest,
    } as QueryGetSaveRequestsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetSaveRequestsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSaveRequestsRequest>
  ): QueryGetSaveRequestsRequest {
    const message = {
      ...baseQueryGetSaveRequestsRequest,
    } as QueryGetSaveRequestsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetSaveRequestsResponse: object = {};

export const QueryGetSaveRequestsResponse = {
  encode(
    message: QueryGetSaveRequestsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.saveRequests !== undefined) {
      SaveRequests.encode(
        message.saveRequests,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSaveRequestsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSaveRequestsResponse,
    } as QueryGetSaveRequestsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saveRequests = SaveRequests.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSaveRequestsResponse {
    const message = {
      ...baseQueryGetSaveRequestsResponse,
    } as QueryGetSaveRequestsResponse;
    if (object.saveRequests !== undefined && object.saveRequests !== null) {
      message.saveRequests = SaveRequests.fromJSON(object.saveRequests);
    } else {
      message.saveRequests = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSaveRequestsResponse): unknown {
    const obj: any = {};
    message.saveRequests !== undefined &&
      (obj.saveRequests = message.saveRequests
        ? SaveRequests.toJSON(message.saveRequests)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSaveRequestsResponse>
  ): QueryGetSaveRequestsResponse {
    const message = {
      ...baseQueryGetSaveRequestsResponse,
    } as QueryGetSaveRequestsResponse;
    if (object.saveRequests !== undefined && object.saveRequests !== null) {
      message.saveRequests = SaveRequests.fromPartial(object.saveRequests);
    } else {
      message.saveRequests = undefined;
    }
    return message;
  },
};

const baseQueryAllSaveRequestsRequest: object = {};

export const QueryAllSaveRequestsRequest = {
  encode(
    message: QueryAllSaveRequestsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSaveRequestsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSaveRequestsRequest,
    } as QueryAllSaveRequestsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSaveRequestsRequest {
    const message = {
      ...baseQueryAllSaveRequestsRequest,
    } as QueryAllSaveRequestsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSaveRequestsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSaveRequestsRequest>
  ): QueryAllSaveRequestsRequest {
    const message = {
      ...baseQueryAllSaveRequestsRequest,
    } as QueryAllSaveRequestsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSaveRequestsResponse: object = {};

export const QueryAllSaveRequestsResponse = {
  encode(
    message: QueryAllSaveRequestsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.saveRequests) {
      SaveRequests.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSaveRequestsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSaveRequestsResponse,
    } as QueryAllSaveRequestsResponse;
    message.saveRequests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saveRequests.push(
            SaveRequests.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSaveRequestsResponse {
    const message = {
      ...baseQueryAllSaveRequestsResponse,
    } as QueryAllSaveRequestsResponse;
    message.saveRequests = [];
    if (object.saveRequests !== undefined && object.saveRequests !== null) {
      for (const e of object.saveRequests) {
        message.saveRequests.push(SaveRequests.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSaveRequestsResponse): unknown {
    const obj: any = {};
    if (message.saveRequests) {
      obj.saveRequests = message.saveRequests.map((e) =>
        e ? SaveRequests.toJSON(e) : undefined
      );
    } else {
      obj.saveRequests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSaveRequestsResponse>
  ): QueryAllSaveRequestsResponse {
    const message = {
      ...baseQueryAllSaveRequestsResponse,
    } as QueryAllSaveRequestsResponse;
    message.saveRequests = [];
    if (object.saveRequests !== undefined && object.saveRequests !== null) {
      for (const e of object.saveRequests) {
        message.saveRequests.push(SaveRequests.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SaveRequests by index. */
  SaveRequests(
    request: QueryGetSaveRequestsRequest
  ): Promise<QueryGetSaveRequestsResponse>;
  /** Queries a list of SaveRequests items. */
  SaveRequestsAll(
    request: QueryAllSaveRequestsRequest
  ): Promise<QueryAllSaveRequestsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.jklmining.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  SaveRequests(
    request: QueryGetSaveRequestsRequest
  ): Promise<QueryGetSaveRequestsResponse> {
    const data = QueryGetSaveRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.jklmining.Query",
      "SaveRequests",
      data
    );
    return promise.then((data) =>
      QueryGetSaveRequestsResponse.decode(new Reader(data))
    );
  }

  SaveRequestsAll(
    request: QueryAllSaveRequestsRequest
  ): Promise<QueryAllSaveRequestsResponse> {
    const data = QueryAllSaveRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "jackaldao.canine.jklmining.Query",
      "SaveRequestsAll",
      data
    );
    return promise.then((data) =>
      QueryAllSaveRequestsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
