import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** Params defines the parameters for the leverage module. */
export interface Params {
  /**
   * Complete Liquidation Threshold determines how far over their borrow
   * limit a borrower must be in order for their positions to be liquidated
   * fully in a single event.
   */
  completeLiquidationThreshold: string;

  /**
   * Minimum Close Factor determines the portion of a borrower's position
   * that can be liquidated in a single event, when the borrower is just barely
   * over their borrow limit.
   */
  minimumCloseFactor: string;

  /**
   * Oracle Reward Factor determines the portion of interest accrued on
   * borrows that is sent to the oracle module to fund its reward pool.
   */
  oracleRewardFactor: string;

  /**
   * Small Liquidation Size determines the USD value at which a borrow is
   * considered small enough to be liquidated in a single transaction, bypassing
   * dynamic close factor.
   */
  smallLiquidationSize: string;

  /**
   * Direct Liquidation Fee is a reduction factor in liquidation incentive
   * experienced by liquidators who choose to receive base assets instead of
   * uTokens as liquidation rewards.
   */
  directLiquidationFee: string;
}

/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 */
export interface Token {
  /** Base Denom is the denomination of the underlying base token. */
  baseDenom: string;

  /**
   * Reserve Factor defines what portion of accrued interest goes to reserves
   * when this token is borrowed.
   */
  reserveFactor: string;

  /**
   * Collateral Weight defines what portion of the total value of the asset
   * can contribute to a users borrowing power. If the collateral weight is
   * zero, using this asset as collateral against borrowing will be disabled.
   */
  collateralWeight: string;

  /**
   * Liquidation Threshold defines what amount of the total value of the
   * asset can contribute to a user's liquidation threshold (above which they
   * become eligible for liquidation).
   */
  liquidationThreshold: string;

  /**
   * Base Borrow Rate defines the minimum interest rate for borrowing this
   * asset.
   */
  baseBorrowRate: string;

  /**
   * Kink Borrow Rate defines the interest rate for borrowing this
   * asset when supply utilization is equal to 'kink_utilization'.
   */
  kinkBorrowRate: string;

  /**
   * Max Borrow Rate defines the interest rate for borrowing this
   * asset when supply utilization is at its maximum.
   */
  maxBorrowRate: string;

  /**
   * Kink Utilization defines the supply utilization value where
   * the kink in the borrow interest rate function occurs.
   */
  kinkUtilization: string;

  /**
   * Liquidation Incentive determines the portion of bonus collateral of
   * a token type liquidators receive as a liquidation reward.
   */
  liquidationIncentive: string;

  /** Symbol Denom is the human readable denomination of this token. */
  symbolDenom: string;

  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the token denoted in its symbol denom to the actual amount
   * of its base denom.
   */
  exponent: number;

  /**
   * Enable Msg Supply allows supplying for lending or collateral using this
   * token. `false` means that a token can no longer be supplied.
   * Note that withdrawing is always enabled. Disabling supply would
   * be one step in phasing out an asset type.
   */
  enableMsgSupply: boolean;

  /**
   * Enable Msg Borrow allows borrowing of this token. Note that repaying is
   * always enabled. Disabling borrowing would be one step in phasing out an
   * asset type, but could also be used from the start for asset types meant
   * to be collateral only, like meTokens.
   */
  enableMsgBorrow: boolean;

  /**
   * Blacklist should only be used to eliminate an asset completely. A blacklisted
   * asset is treated as though its oracle price is zero, and thus ignored by
   * calculations such as collateral value and borrow limit. Can still be repaid
   * or withdrawn, but not liquidated. A blacklisted token must have enable_msg_supply
   * and enable_msg_borrow set to false. Such tokens can be safely removed from the
   * oracle and price feeder as well.
   */
  blacklist: boolean;

  /**
   * Max Collateral Share specifies how much of the system's overall collateral
   * can be provided by a given token. 1.0 means that the token has no restriction.
   * 0.1 means maximum 10% of system's total collateral value can be provided by this token.
   * Valid values: 0-1.
   */
  maxCollateralShare: string;

  /**
   * Max Supply Utilization specifies the maximum supply utilization a token is
   * allowed to reach as a direct result of user borrowing. New borrows are not allowed when
   * the supply utilization is above `max_supply_utilization`.
   * Valid values: 0-1.
   */
  maxSupplyUtilization: string;

  /**
   * Min Collateral Liquidity specifies the minimum collateral liquidity a token is
   * allowed to reach as a direct result of users borrowing, collateralizing, or
   * withdrawing assets. Liquidity can only drop below this value due to interest
   * or liquidations.
   */
  minCollateralLiquidity: string;

  /**
   * Max Supply is the maximum amount of tokens the protocol can hold.
   * Adding more supply of the given token to the protocol will return an error.
   * Must be a non negative value. 0 means that there is no limit.
   * To mark a token as not valid for supply, `msg_supply` must be set to false.
   */
  maxSupply: string;
}

function createBaseParams(): Params {
  return {
    completeLiquidationThreshold: "",
    minimumCloseFactor: "",
    oracleRewardFactor: "",
    smallLiquidationSize: "",
    directLiquidationFee: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completeLiquidationThreshold !== "") {
      writer.uint32(18).string(message.completeLiquidationThreshold);
    }

    if (message.minimumCloseFactor !== "") {
      writer.uint32(26).string(message.minimumCloseFactor);
    }

    if (message.oracleRewardFactor !== "") {
      writer.uint32(34).string(message.oracleRewardFactor);
    }

    if (message.smallLiquidationSize !== "") {
      writer.uint32(42).string(message.smallLiquidationSize);
    }

    if (message.directLiquidationFee !== "") {
      writer.uint32(50).string(message.directLiquidationFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.completeLiquidationThreshold = reader.string();
          break;

        case 3:
          message.minimumCloseFactor = reader.string();
          break;

        case 4:
          message.oracleRewardFactor = reader.string();
          break;

        case 5:
          message.smallLiquidationSize = reader.string();
          break;

        case 6:
          message.directLiquidationFee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      completeLiquidationThreshold: isSet(object.completeLiquidationThreshold) ? String(object.completeLiquidationThreshold) : "",
      minimumCloseFactor: isSet(object.minimumCloseFactor) ? String(object.minimumCloseFactor) : "",
      oracleRewardFactor: isSet(object.oracleRewardFactor) ? String(object.oracleRewardFactor) : "",
      smallLiquidationSize: isSet(object.smallLiquidationSize) ? String(object.smallLiquidationSize) : "",
      directLiquidationFee: isSet(object.directLiquidationFee) ? String(object.directLiquidationFee) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.completeLiquidationThreshold !== undefined && (obj.completeLiquidationThreshold = message.completeLiquidationThreshold);
    message.minimumCloseFactor !== undefined && (obj.minimumCloseFactor = message.minimumCloseFactor);
    message.oracleRewardFactor !== undefined && (obj.oracleRewardFactor = message.oracleRewardFactor);
    message.smallLiquidationSize !== undefined && (obj.smallLiquidationSize = message.smallLiquidationSize);
    message.directLiquidationFee !== undefined && (obj.directLiquidationFee = message.directLiquidationFee);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
    message.minimumCloseFactor = object.minimumCloseFactor ?? "";
    message.oracleRewardFactor = object.oracleRewardFactor ?? "";
    message.smallLiquidationSize = object.smallLiquidationSize ?? "";
    message.directLiquidationFee = object.directLiquidationFee ?? "";
    return message;
  }

};

function createBaseToken(): Token {
  return {
    baseDenom: "",
    reserveFactor: "",
    collateralWeight: "",
    liquidationThreshold: "",
    baseBorrowRate: "",
    kinkBorrowRate: "",
    maxBorrowRate: "",
    kinkUtilization: "",
    liquidationIncentive: "",
    symbolDenom: "",
    exponent: 0,
    enableMsgSupply: false,
    enableMsgBorrow: false,
    blacklist: false,
    maxCollateralShare: "",
    maxSupplyUtilization: "",
    minCollateralLiquidity: "",
    maxSupply: ""
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }

    if (message.reserveFactor !== "") {
      writer.uint32(18).string(message.reserveFactor);
    }

    if (message.collateralWeight !== "") {
      writer.uint32(26).string(message.collateralWeight);
    }

    if (message.liquidationThreshold !== "") {
      writer.uint32(34).string(message.liquidationThreshold);
    }

    if (message.baseBorrowRate !== "") {
      writer.uint32(42).string(message.baseBorrowRate);
    }

    if (message.kinkBorrowRate !== "") {
      writer.uint32(50).string(message.kinkBorrowRate);
    }

    if (message.maxBorrowRate !== "") {
      writer.uint32(58).string(message.maxBorrowRate);
    }

    if (message.kinkUtilization !== "") {
      writer.uint32(66).string(message.kinkUtilization);
    }

    if (message.liquidationIncentive !== "") {
      writer.uint32(74).string(message.liquidationIncentive);
    }

    if (message.symbolDenom !== "") {
      writer.uint32(82).string(message.symbolDenom);
    }

    if (message.exponent !== 0) {
      writer.uint32(88).uint32(message.exponent);
    }

    if (message.enableMsgSupply === true) {
      writer.uint32(96).bool(message.enableMsgSupply);
    }

    if (message.enableMsgBorrow === true) {
      writer.uint32(104).bool(message.enableMsgBorrow);
    }

    if (message.blacklist === true) {
      writer.uint32(112).bool(message.blacklist);
    }

    if (message.maxCollateralShare !== "") {
      writer.uint32(122).string(message.maxCollateralShare);
    }

    if (message.maxSupplyUtilization !== "") {
      writer.uint32(130).string(message.maxSupplyUtilization);
    }

    if (message.minCollateralLiquidity !== "") {
      writer.uint32(138).string(message.minCollateralLiquidity);
    }

    if (message.maxSupply !== "") {
      writer.uint32(146).string(message.maxSupply);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;

        case 2:
          message.reserveFactor = reader.string();
          break;

        case 3:
          message.collateralWeight = reader.string();
          break;

        case 4:
          message.liquidationThreshold = reader.string();
          break;

        case 5:
          message.baseBorrowRate = reader.string();
          break;

        case 6:
          message.kinkBorrowRate = reader.string();
          break;

        case 7:
          message.maxBorrowRate = reader.string();
          break;

        case 8:
          message.kinkUtilization = reader.string();
          break;

        case 9:
          message.liquidationIncentive = reader.string();
          break;

        case 10:
          message.symbolDenom = reader.string();
          break;

        case 11:
          message.exponent = reader.uint32();
          break;

        case 12:
          message.enableMsgSupply = reader.bool();
          break;

        case 13:
          message.enableMsgBorrow = reader.bool();
          break;

        case 14:
          message.blacklist = reader.bool();
          break;

        case 15:
          message.maxCollateralShare = reader.string();
          break;

        case 16:
          message.maxSupplyUtilization = reader.string();
          break;

        case 17:
          message.minCollateralLiquidity = reader.string();
          break;

        case 18:
          message.maxSupply = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Token {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      reserveFactor: isSet(object.reserveFactor) ? String(object.reserveFactor) : "",
      collateralWeight: isSet(object.collateralWeight) ? String(object.collateralWeight) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : "",
      baseBorrowRate: isSet(object.baseBorrowRate) ? String(object.baseBorrowRate) : "",
      kinkBorrowRate: isSet(object.kinkBorrowRate) ? String(object.kinkBorrowRate) : "",
      maxBorrowRate: isSet(object.maxBorrowRate) ? String(object.maxBorrowRate) : "",
      kinkUtilization: isSet(object.kinkUtilization) ? String(object.kinkUtilization) : "",
      liquidationIncentive: isSet(object.liquidationIncentive) ? String(object.liquidationIncentive) : "",
      symbolDenom: isSet(object.symbolDenom) ? String(object.symbolDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      enableMsgSupply: isSet(object.enableMsgSupply) ? Boolean(object.enableMsgSupply) : false,
      enableMsgBorrow: isSet(object.enableMsgBorrow) ? Boolean(object.enableMsgBorrow) : false,
      blacklist: isSet(object.blacklist) ? Boolean(object.blacklist) : false,
      maxCollateralShare: isSet(object.maxCollateralShare) ? String(object.maxCollateralShare) : "",
      maxSupplyUtilization: isSet(object.maxSupplyUtilization) ? String(object.maxSupplyUtilization) : "",
      minCollateralLiquidity: isSet(object.minCollateralLiquidity) ? String(object.minCollateralLiquidity) : "",
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : ""
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.reserveFactor !== undefined && (obj.reserveFactor = message.reserveFactor);
    message.collateralWeight !== undefined && (obj.collateralWeight = message.collateralWeight);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    message.baseBorrowRate !== undefined && (obj.baseBorrowRate = message.baseBorrowRate);
    message.kinkBorrowRate !== undefined && (obj.kinkBorrowRate = message.kinkBorrowRate);
    message.maxBorrowRate !== undefined && (obj.maxBorrowRate = message.maxBorrowRate);
    message.kinkUtilization !== undefined && (obj.kinkUtilization = message.kinkUtilization);
    message.liquidationIncentive !== undefined && (obj.liquidationIncentive = message.liquidationIncentive);
    message.symbolDenom !== undefined && (obj.symbolDenom = message.symbolDenom);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.enableMsgSupply !== undefined && (obj.enableMsgSupply = message.enableMsgSupply);
    message.enableMsgBorrow !== undefined && (obj.enableMsgBorrow = message.enableMsgBorrow);
    message.blacklist !== undefined && (obj.blacklist = message.blacklist);
    message.maxCollateralShare !== undefined && (obj.maxCollateralShare = message.maxCollateralShare);
    message.maxSupplyUtilization !== undefined && (obj.maxSupplyUtilization = message.maxSupplyUtilization);
    message.minCollateralLiquidity !== undefined && (obj.minCollateralLiquidity = message.minCollateralLiquidity);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.baseDenom = object.baseDenom ?? "";
    message.reserveFactor = object.reserveFactor ?? "";
    message.collateralWeight = object.collateralWeight ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.baseBorrowRate = object.baseBorrowRate ?? "";
    message.kinkBorrowRate = object.kinkBorrowRate ?? "";
    message.maxBorrowRate = object.maxBorrowRate ?? "";
    message.kinkUtilization = object.kinkUtilization ?? "";
    message.liquidationIncentive = object.liquidationIncentive ?? "";
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    message.enableMsgSupply = object.enableMsgSupply ?? false;
    message.enableMsgBorrow = object.enableMsgBorrow ?? false;
    message.blacklist = object.blacklist ?? false;
    message.maxCollateralShare = object.maxCollateralShare ?? "";
    message.maxSupplyUtilization = object.maxSupplyUtilization ?? "";
    message.minCollateralLiquidity = object.minCollateralLiquidity ?? "";
    message.maxSupply = object.maxSupply ?? "";
    return message;
  }

};