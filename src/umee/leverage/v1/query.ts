import { Params, Token } from "./leverage";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";

/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}

/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
  params: Params;
}

/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokens {}

/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponse {
  registry: Token[];
}

/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummary {
  denom: string;
}

/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponse {
  /** Symbol Denom is the human-readable representation of a token denom, for example "UMEE" or "ATOM". */
  symbolDenom: string;

  /** Exponent is the power of ten required to get from base denom to symbol denom. For example, an exponent of 6 means 10^6 uumee = 1 UMEE. */
  exponent: number;

  /** Oracle Price is the current USD value of a base token. Exponent must be applied to reach the price from symbol_denom. For example, a price of $0.000001 for 1 uumee is equivalent to $1.00 for 1 UMEE. Oracle price is nil when the oracle is down. */
  oraclePrice?: string;

  /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
  uTokenExchangeRate: string;

  /** Supply APY is the current interest rate suppliers are receiving for their deposits. For example, 0.11 would mean 11% APY. Supply APY is always less than borrow APY. */
  supply_APY: string;

  /** Borrow APY is the current interest rate borrowers are being charged on their loans. For example, 0.2 would mean 20% APY. */
  borrow_APY: string;

  /** Supplied is the total amount of tokens supplied to the the system by all suppliers, including any interest earned. This includes that tokens which have been borrowed out or enabled as collateral, but excludes reserves. Supplied is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
  supplied: string;

  /** Reserved is the total amount of tokens held in reserve by the module for emergencies. Reserves are always excluded from total supply, borrow, collateral, and liqduidity queries. Reserves are denominated in base tokens, so exponent must be applied to convert to symbol denom. */
  reserved: string;

  /** Collateral is the total amount of uTokens collateralized by all borrowers. Collateral is denominated in uTokenso, so both uToken exchange rate and exponent must also be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee and uToken exhange rate is 1.2, then 5 UMEE have been collateralized. */
  collateral: string;

  /** Borrowed is the total amount of debt in this token held across all borrowers. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
  borrowed: string;

  /** Liquidity is the amount of a token that has been supplied but not yet borrowed or reserved. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
  liquidity: string;

  /** Maximum Borrow is the amount of a token that is available for borrowing, including that which has already been borrowed out. This amount is less than total supply due to safety limits. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if borrowed is 3000000 uumee and maximum borrow is 4000000 uumee, then 1 UMEE is currently available for borrowing. */
  maximumBorrow: string;

  /** Maximum Collateral is the amount of a token that can be collateralized, including that which is already collateral. This amount is less than total supply due to safety limits. It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee, uToken exhange rate is 1.2, and maximum borrow is 7000000 uumee, then a maximum of 2 additional UMEE is permitted to be collateralized. */
  maximumCollateral: string;

  /** Mimimum Liquidity is the minimum amount of liquidity in the module required by safety limits, based on the current collateral. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if liquidity is 9000000 uumee and minimum liquidity is 8000000 uumee, then a maximum of 1 additional UMEE is currently available for borrowing or withdrawal. */
  minimumLiquidity: string;

  /** uToken Supply is the total amount of a base token's associated uToken in circulation. */
  uTokenSupply: string;

  /** Available Borrow is the maximum additional amount of base tokens than can be borrowed based on current liquidity and system safety limits. It can also be calculated by MIN(maximum_borrow - borrowed, liquidity - minimum_liquidity). It is denominated in base tokens, so exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and borrowing is temporarily unavailable. */
  availableBorrow: string;

  /** Available Withdraw is the maximum amount of uTokens than can currently be withdrawn based on liquidity and system safety limits. It can also be calculated by (liquidity - minimum_liquidity). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and withdrawal is temporarily unavailable. */
  availableWithdraw: string;

  /** Available Collateralize is the maximum additional amount of uTokens than can be collateralized based on current liquidity and system safety limits. It can also be calculated by (maximum_collateral, - collateral). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and additional collateral cannot be created until more liquidity is present. */
  availableCollateralize: string;
}

/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalances {
  address: string;
}

/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponse {
  /** Supplied contains all tokens the account has supplied, including interest earned. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
  supplied: Coin[];

  /** Collateral contains all uTokens the account has collateralized. It is denominated in uTokens, so both exponent and uToken exchange rate from each coin's market_summary must be applied to convert to base token symbol denom. */
  collateral: Coin[];

  /** Borrowed contains all tokens the account has borrowed, including interest owed. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
  borrowed: Coin[];
}

/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummary {
  address: string;
}

/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponse {
  /** Supplied Value is the sum of the USD value of all tokens the account has supplied, includng interest earned. */
  suppliedValue: string;

  /** Collateral Value is the sum of the USD value of all uTokens the account has collateralized. */
  collateralValue: string;

  /** Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed. */
  borrowedValue: string;

  /** Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing. */
  borrowLimit: string;

  /** Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation. */
  liquidationThreshold: string;
}

/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargets {}

/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponse {
  /** Targets are the addresses of borrowers eligible for liquidation. */
  targets: string[];
}

/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebts {}

/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponse {
  /** Targets are borrow positions currently marked for bad debt repayment. Each contains an Address and a Denom. */
  targets: BadDebt[];
}

function createBaseQueryParams(): QueryParams {
  return {};
}

export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParams();

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

  fromJSON(_: any): QueryParams {
    return {};
  },

  toJSON(_: QueryParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryRegisteredTokens(): QueryRegisteredTokens {
  return {};
}

export const QueryRegisteredTokens = {
  encode(_: QueryRegisteredTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredTokens();

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

  fromJSON(_: any): QueryRegisteredTokens {
    return {};
  },

  toJSON(_: QueryRegisteredTokens): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryRegisteredTokens>): QueryRegisteredTokens {
    const message = createBaseQueryRegisteredTokens();
    return message;
  }

};

function createBaseQueryRegisteredTokensResponse(): QueryRegisteredTokensResponse {
  return {
    registry: []
  };
}

export const QueryRegisteredTokensResponse = {
  encode(message: QueryRegisteredTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredTokensResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRegisteredTokensResponse {
    return {
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Token.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryRegisteredTokensResponse): unknown {
    const obj: any = {};

    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toJSON(e) : undefined);
    } else {
      obj.registry = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryRegisteredTokensResponse>): QueryRegisteredTokensResponse {
    const message = createBaseQueryRegisteredTokensResponse();
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryMarketSummary(): QueryMarketSummary {
  return {
    denom: ""
  };
}

export const QueryMarketSummary = {
  encode(message: QueryMarketSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketSummary();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMarketSummary {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryMarketSummary): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMarketSummary>): QueryMarketSummary {
    const message = createBaseQueryMarketSummary();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryMarketSummaryResponse(): QueryMarketSummaryResponse {
  return {
    symbolDenom: "",
    exponent: 0,
    oraclePrice: undefined,
    uTokenExchangeRate: "",
    supply_APY: "",
    borrow_APY: "",
    supplied: "",
    reserved: "",
    collateral: "",
    borrowed: "",
    liquidity: "",
    maximumBorrow: "",
    maximumCollateral: "",
    minimumLiquidity: "",
    uTokenSupply: "",
    availableBorrow: "",
    availableWithdraw: "",
    availableCollateralize: ""
  };
}

export const QueryMarketSummaryResponse = {
  encode(message: QueryMarketSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbolDenom !== "") {
      writer.uint32(10).string(message.symbolDenom);
    }

    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }

    if (message.oraclePrice !== undefined) {
      writer.uint32(26).string(message.oraclePrice);
    }

    if (message.uTokenExchangeRate !== "") {
      writer.uint32(34).string(message.uTokenExchangeRate);
    }

    if (message.supply_APY !== "") {
      writer.uint32(42).string(message.supply_APY);
    }

    if (message.borrow_APY !== "") {
      writer.uint32(50).string(message.borrow_APY);
    }

    if (message.supplied !== "") {
      writer.uint32(58).string(message.supplied);
    }

    if (message.reserved !== "") {
      writer.uint32(66).string(message.reserved);
    }

    if (message.collateral !== "") {
      writer.uint32(74).string(message.collateral);
    }

    if (message.borrowed !== "") {
      writer.uint32(82).string(message.borrowed);
    }

    if (message.liquidity !== "") {
      writer.uint32(90).string(message.liquidity);
    }

    if (message.maximumBorrow !== "") {
      writer.uint32(98).string(message.maximumBorrow);
    }

    if (message.maximumCollateral !== "") {
      writer.uint32(106).string(message.maximumCollateral);
    }

    if (message.minimumLiquidity !== "") {
      writer.uint32(114).string(message.minimumLiquidity);
    }

    if (message.uTokenSupply !== "") {
      writer.uint32(122).string(message.uTokenSupply);
    }

    if (message.availableBorrow !== "") {
      writer.uint32(130).string(message.availableBorrow);
    }

    if (message.availableWithdraw !== "") {
      writer.uint32(138).string(message.availableWithdraw);
    }

    if (message.availableCollateralize !== "") {
      writer.uint32(146).string(message.availableCollateralize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketSummaryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbolDenom = reader.string();
          break;

        case 2:
          message.exponent = reader.uint32();
          break;

        case 3:
          message.oraclePrice = reader.string();
          break;

        case 4:
          message.uTokenExchangeRate = reader.string();
          break;

        case 5:
          message.supply_APY = reader.string();
          break;

        case 6:
          message.borrow_APY = reader.string();
          break;

        case 7:
          message.supplied = reader.string();
          break;

        case 8:
          message.reserved = reader.string();
          break;

        case 9:
          message.collateral = reader.string();
          break;

        case 10:
          message.borrowed = reader.string();
          break;

        case 11:
          message.liquidity = reader.string();
          break;

        case 12:
          message.maximumBorrow = reader.string();
          break;

        case 13:
          message.maximumCollateral = reader.string();
          break;

        case 14:
          message.minimumLiquidity = reader.string();
          break;

        case 15:
          message.uTokenSupply = reader.string();
          break;

        case 16:
          message.availableBorrow = reader.string();
          break;

        case 17:
          message.availableWithdraw = reader.string();
          break;

        case 18:
          message.availableCollateralize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMarketSummaryResponse {
    return {
      symbolDenom: isSet(object.symbolDenom) ? String(object.symbolDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      oraclePrice: isSet(object.oraclePrice) ? String(object.oraclePrice) : undefined,
      uTokenExchangeRate: isSet(object.uTokenExchangeRate) ? String(object.uTokenExchangeRate) : "",
      supply_APY: isSet(object.supply_APY) ? String(object.supply_APY) : "",
      borrow_APY: isSet(object.borrow_APY) ? String(object.borrow_APY) : "",
      supplied: isSet(object.supplied) ? String(object.supplied) : "",
      reserved: isSet(object.reserved) ? String(object.reserved) : "",
      collateral: isSet(object.collateral) ? String(object.collateral) : "",
      borrowed: isSet(object.borrowed) ? String(object.borrowed) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
      maximumBorrow: isSet(object.maximumBorrow) ? String(object.maximumBorrow) : "",
      maximumCollateral: isSet(object.maximumCollateral) ? String(object.maximumCollateral) : "",
      minimumLiquidity: isSet(object.minimumLiquidity) ? String(object.minimumLiquidity) : "",
      uTokenSupply: isSet(object.uTokenSupply) ? String(object.uTokenSupply) : "",
      availableBorrow: isSet(object.availableBorrow) ? String(object.availableBorrow) : "",
      availableWithdraw: isSet(object.availableWithdraw) ? String(object.availableWithdraw) : "",
      availableCollateralize: isSet(object.availableCollateralize) ? String(object.availableCollateralize) : ""
    };
  },

  toJSON(message: QueryMarketSummaryResponse): unknown {
    const obj: any = {};
    message.symbolDenom !== undefined && (obj.symbolDenom = message.symbolDenom);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.oraclePrice !== undefined && (obj.oraclePrice = message.oraclePrice);
    message.uTokenExchangeRate !== undefined && (obj.uTokenExchangeRate = message.uTokenExchangeRate);
    message.supply_APY !== undefined && (obj.supply_APY = message.supply_APY);
    message.borrow_APY !== undefined && (obj.borrow_APY = message.borrow_APY);
    message.supplied !== undefined && (obj.supplied = message.supplied);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    message.borrowed !== undefined && (obj.borrowed = message.borrowed);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    message.maximumBorrow !== undefined && (obj.maximumBorrow = message.maximumBorrow);
    message.maximumCollateral !== undefined && (obj.maximumCollateral = message.maximumCollateral);
    message.minimumLiquidity !== undefined && (obj.minimumLiquidity = message.minimumLiquidity);
    message.uTokenSupply !== undefined && (obj.uTokenSupply = message.uTokenSupply);
    message.availableBorrow !== undefined && (obj.availableBorrow = message.availableBorrow);
    message.availableWithdraw !== undefined && (obj.availableWithdraw = message.availableWithdraw);
    message.availableCollateralize !== undefined && (obj.availableCollateralize = message.availableCollateralize);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMarketSummaryResponse>): QueryMarketSummaryResponse {
    const message = createBaseQueryMarketSummaryResponse();
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    message.oraclePrice = object.oraclePrice ?? undefined;
    message.uTokenExchangeRate = object.uTokenExchangeRate ?? "";
    message.supply_APY = object.supply_APY ?? "";
    message.borrow_APY = object.borrow_APY ?? "";
    message.supplied = object.supplied ?? "";
    message.reserved = object.reserved ?? "";
    message.collateral = object.collateral ?? "";
    message.borrowed = object.borrowed ?? "";
    message.liquidity = object.liquidity ?? "";
    message.maximumBorrow = object.maximumBorrow ?? "";
    message.maximumCollateral = object.maximumCollateral ?? "";
    message.minimumLiquidity = object.minimumLiquidity ?? "";
    message.uTokenSupply = object.uTokenSupply ?? "";
    message.availableBorrow = object.availableBorrow ?? "";
    message.availableWithdraw = object.availableWithdraw ?? "";
    message.availableCollateralize = object.availableCollateralize ?? "";
    return message;
  }

};

function createBaseQueryAccountBalances(): QueryAccountBalances {
  return {
    address: ""
  };
}

export const QueryAccountBalances = {
  encode(message: QueryAccountBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountBalances {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalances();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountBalances {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAccountBalances): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountBalances>): QueryAccountBalances {
    const message = createBaseQueryAccountBalances();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryAccountBalancesResponse(): QueryAccountBalancesResponse {
  return {
    supplied: [],
    collateral: [],
    borrowed: []
  };
}

export const QueryAccountBalancesResponse = {
  encode(message: QueryAccountBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supplied) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.borrowed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalancesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supplied.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.borrowed.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountBalancesResponse {
    return {
      supplied: Array.isArray(object?.supplied) ? object.supplied.map((e: any) => Coin.fromJSON(e)) : [],
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : [],
      borrowed: Array.isArray(object?.borrowed) ? object.borrowed.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryAccountBalancesResponse): unknown {
    const obj: any = {};

    if (message.supplied) {
      obj.supplied = message.supplied.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supplied = [];
    }

    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.collateral = [];
    }

    if (message.borrowed) {
      obj.borrowed = message.borrowed.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.borrowed = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountBalancesResponse>): QueryAccountBalancesResponse {
    const message = createBaseQueryAccountBalancesResponse();
    message.supplied = object.supplied?.map(e => Coin.fromPartial(e)) || [];
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    message.borrowed = object.borrowed?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAccountSummary(): QueryAccountSummary {
  return {
    address: ""
  };
}

export const QueryAccountSummary = {
  encode(message: QueryAccountSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountSummary();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountSummary {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAccountSummary): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountSummary>): QueryAccountSummary {
    const message = createBaseQueryAccountSummary();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryAccountSummaryResponse(): QueryAccountSummaryResponse {
  return {
    suppliedValue: "",
    collateralValue: "",
    borrowedValue: "",
    borrowLimit: "",
    liquidationThreshold: ""
  };
}

export const QueryAccountSummaryResponse = {
  encode(message: QueryAccountSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.suppliedValue !== "") {
      writer.uint32(10).string(message.suppliedValue);
    }

    if (message.collateralValue !== "") {
      writer.uint32(18).string(message.collateralValue);
    }

    if (message.borrowedValue !== "") {
      writer.uint32(26).string(message.borrowedValue);
    }

    if (message.borrowLimit !== "") {
      writer.uint32(34).string(message.borrowLimit);
    }

    if (message.liquidationThreshold !== "") {
      writer.uint32(42).string(message.liquidationThreshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountSummaryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.suppliedValue = reader.string();
          break;

        case 2:
          message.collateralValue = reader.string();
          break;

        case 3:
          message.borrowedValue = reader.string();
          break;

        case 4:
          message.borrowLimit = reader.string();
          break;

        case 5:
          message.liquidationThreshold = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountSummaryResponse {
    return {
      suppliedValue: isSet(object.suppliedValue) ? String(object.suppliedValue) : "",
      collateralValue: isSet(object.collateralValue) ? String(object.collateralValue) : "",
      borrowedValue: isSet(object.borrowedValue) ? String(object.borrowedValue) : "",
      borrowLimit: isSet(object.borrowLimit) ? String(object.borrowLimit) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : ""
    };
  },

  toJSON(message: QueryAccountSummaryResponse): unknown {
    const obj: any = {};
    message.suppliedValue !== undefined && (obj.suppliedValue = message.suppliedValue);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue);
    message.borrowedValue !== undefined && (obj.borrowedValue = message.borrowedValue);
    message.borrowLimit !== undefined && (obj.borrowLimit = message.borrowLimit);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse {
    const message = createBaseQueryAccountSummaryResponse();
    message.suppliedValue = object.suppliedValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.borrowedValue = object.borrowedValue ?? "";
    message.borrowLimit = object.borrowLimit ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    return message;
  }

};

function createBaseQueryLiquidationTargets(): QueryLiquidationTargets {
  return {};
}

export const QueryLiquidationTargets = {
  encode(_: QueryLiquidationTargets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationTargets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationTargets();

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

  fromJSON(_: any): QueryLiquidationTargets {
    return {};
  },

  toJSON(_: QueryLiquidationTargets): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryLiquidationTargets>): QueryLiquidationTargets {
    const message = createBaseQueryLiquidationTargets();
    return message;
  }

};

function createBaseQueryLiquidationTargetsResponse(): QueryLiquidationTargetsResponse {
  return {
    targets: []
  };
}

export const QueryLiquidationTargetsResponse = {
  encode(message: QueryLiquidationTargetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.targets) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationTargetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationTargetsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.targets.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLiquidationTargetsResponse {
    return {
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryLiquidationTargetsResponse): unknown {
    const obj: any = {};

    if (message.targets) {
      obj.targets = message.targets.map(e => e);
    } else {
      obj.targets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryLiquidationTargetsResponse>): QueryLiquidationTargetsResponse {
    const message = createBaseQueryLiquidationTargetsResponse();
    message.targets = object.targets?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryBadDebts(): QueryBadDebts {
  return {};
}

export const QueryBadDebts = {
  encode(_: QueryBadDebts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBadDebts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBadDebts();

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

  fromJSON(_: any): QueryBadDebts {
    return {};
  },

  toJSON(_: QueryBadDebts): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBadDebts>): QueryBadDebts {
    const message = createBaseQueryBadDebts();
    return message;
  }

};

function createBaseQueryBadDebtsResponse(): QueryBadDebtsResponse {
  return {
    targets: []
  };
}

export const QueryBadDebtsResponse = {
  encode(message: QueryBadDebtsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.targets) {
      BadDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBadDebtsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBadDebtsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.targets.push(BadDebt.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBadDebtsResponse {
    return {
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => BadDebt.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryBadDebtsResponse): unknown {
    const obj: any = {};

    if (message.targets) {
      obj.targets = message.targets.map(e => e ? BadDebt.toJSON(e) : undefined);
    } else {
      obj.targets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryBadDebtsResponse>): QueryBadDebtsResponse {
    const message = createBaseQueryBadDebtsResponse();
    message.targets = object.targets?.map(e => BadDebt.fromPartial(e)) || [];
    return message;
  }

};