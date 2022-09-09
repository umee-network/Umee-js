import { Params, Token } from "./leverage";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisState {
  params: Params;
  registry: Token[];
  adjustedBorrows: AdjustedBorrow[];
  collateral: Collateral[];
  reserves: Coin[];
  lastInterestTime: Long;
  badDebts: BadDebt[];
  interestScalars: InterestScalar[];
  utokenSupply: Coin[];
}

/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrow {
  address: string;
  amount: DecCoin;
}

/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface Collateral {
  address: string;
  amount: Coin;
}

/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebt {
  address: string;
  denom: string;
}

/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalar {
  denom: string;
  scalar: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    registry: [],
    adjustedBorrows: [],
    collateral: [],
    reserves: [],
    lastInterestTime: Long.ZERO,
    badDebts: [],
    interestScalars: [],
    utokenSupply: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.adjustedBorrows) {
      AdjustedBorrow.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.collateral) {
      Collateral.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.reserves) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.lastInterestTime.isZero()) {
      writer.uint32(48).int64(message.lastInterestTime);
    }

    for (const v of message.badDebts) {
      BadDebt.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.interestScalars) {
      InterestScalar.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.utokenSupply) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;

        case 3:
          message.adjustedBorrows.push(AdjustedBorrow.decode(reader, reader.uint32()));
          break;

        case 4:
          message.collateral.push(Collateral.decode(reader, reader.uint32()));
          break;

        case 5:
          message.reserves.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.lastInterestTime = (reader.int64() as Long);
          break;

        case 7:
          message.badDebts.push(BadDebt.decode(reader, reader.uint32()));
          break;

        case 8:
          message.interestScalars.push(InterestScalar.decode(reader, reader.uint32()));
          break;

        case 9:
          message.utokenSupply.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Token.fromJSON(e)) : [],
      adjustedBorrows: Array.isArray(object?.adjustedBorrows) ? object.adjustedBorrows.map((e: any) => AdjustedBorrow.fromJSON(e)) : [],
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Collateral.fromJSON(e)) : [],
      reserves: Array.isArray(object?.reserves) ? object.reserves.map((e: any) => Coin.fromJSON(e)) : [],
      lastInterestTime: isSet(object.lastInterestTime) ? Long.fromString(object.lastInterestTime) : Long.ZERO,
      badDebts: Array.isArray(object?.badDebts) ? object.badDebts.map((e: any) => BadDebt.fromJSON(e)) : [],
      interestScalars: Array.isArray(object?.interestScalars) ? object.interestScalars.map((e: any) => InterestScalar.fromJSON(e)) : [],
      utokenSupply: Array.isArray(object?.utokenSupply) ? object.utokenSupply.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.registry = [];
    }

    if (message.adjustedBorrows) {
      obj.adjustedBorrows = message.adjustedBorrows.map(e => e ? AdjustedBorrow.toJSON(e) : undefined);
    } else {
      obj.adjustedBorrows = [];
    }

    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Collateral.toJSON(e) : undefined);
    } else {
      obj.collateral = [];
    }

    if (message.reserves) {
      obj.reserves = message.reserves.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reserves = [];
    }

    message.lastInterestTime !== undefined && (obj.lastInterestTime = (message.lastInterestTime || Long.ZERO).toString());

    if (message.badDebts) {
      obj.badDebts = message.badDebts.map(e => e ? BadDebt.toJSON(e) : undefined);
    } else {
      obj.badDebts = [];
    }

    if (message.interestScalars) {
      obj.interestScalars = message.interestScalars.map(e => e ? InterestScalar.toJSON(e) : undefined);
    } else {
      obj.interestScalars = [];
    }

    if (message.utokenSupply) {
      obj.utokenSupply = message.utokenSupply.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.utokenSupply = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    message.adjustedBorrows = object.adjustedBorrows?.map(e => AdjustedBorrow.fromPartial(e)) || [];
    message.collateral = object.collateral?.map(e => Collateral.fromPartial(e)) || [];
    message.reserves = object.reserves?.map(e => Coin.fromPartial(e)) || [];
    message.lastInterestTime = object.lastInterestTime !== undefined && object.lastInterestTime !== null ? Long.fromValue(object.lastInterestTime) : Long.ZERO;
    message.badDebts = object.badDebts?.map(e => BadDebt.fromPartial(e)) || [];
    message.interestScalars = object.interestScalars?.map(e => InterestScalar.fromPartial(e)) || [];
    message.utokenSupply = object.utokenSupply?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAdjustedBorrow(): AdjustedBorrow {
  return {
    address: "",
    amount: undefined
  };
}

export const AdjustedBorrow = {
  encode(message: AdjustedBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdjustedBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdjustedBorrow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AdjustedBorrow {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? DecCoin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: AdjustedBorrow): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AdjustedBorrow>): AdjustedBorrow {
    const message = createBaseAdjustedBorrow();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseCollateral(): Collateral {
  return {
    address: "",
    amount: undefined
  };
}

export const Collateral = {
  encode(message: Collateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateral();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Collateral {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: Collateral): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Collateral>): Collateral {
    const message = createBaseCollateral();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseBadDebt(): BadDebt {
  return {
    address: "",
    denom: ""
  };
}

export const BadDebt = {
  encode(message: BadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BadDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadDebt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BadDebt {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: BadDebt): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<BadDebt>): BadDebt {
    const message = createBaseBadDebt();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseInterestScalar(): InterestScalar {
  return {
    denom: "",
    scalar: ""
  };
}

export const InterestScalar = {
  encode(message: InterestScalar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.scalar !== "") {
      writer.uint32(18).string(message.scalar);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterestScalar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterestScalar();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.scalar = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterestScalar {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      scalar: isSet(object.scalar) ? String(object.scalar) : ""
    };
  },

  toJSON(message: InterestScalar): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.scalar !== undefined && (obj.scalar = message.scalar);
    return obj;
  },

  fromPartial(object: DeepPartial<InterestScalar>): InterestScalar {
    const message = createBaseInterestScalar();
    message.denom = object.denom ?? "";
    message.scalar = object.scalar ?? "";
    return message;
  }

};