import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSupply, MsgWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.leverage.v1.MsgSupply", MsgSupply], ["/umee.leverage.v1.MsgWithdraw", MsgWithdraw], ["/umee.leverage.v1.MsgCollateralize", MsgCollateralize], ["/umee.leverage.v1.MsgDecollateralize", MsgDecollateralize], ["/umee.leverage.v1.MsgBorrow", MsgBorrow], ["/umee.leverage.v1.MsgRepay", MsgRepay], ["/umee.leverage.v1.MsgLiquidate", MsgLiquidate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    supply(value: MsgSupply) {
      return {
        typeUrl: "/umee.leverage.v1.MsgSupply",
        value: MsgSupply.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/umee.leverage.v1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    collateralize(value: MsgCollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgCollateralize",
        value: MsgCollateralize.encode(value).finish()
      };
    },

    decollateralize(value: MsgDecollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgDecollateralize",
        value: MsgDecollateralize.encode(value).finish()
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/umee.leverage.v1.MsgBorrow",
        value: MsgBorrow.encode(value).finish()
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/umee.leverage.v1.MsgRepay",
        value: MsgRepay.encode(value).finish()
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/umee.leverage.v1.MsgLiquidate",
        value: MsgLiquidate.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    supply(value: MsgSupply) {
      return {
        typeUrl: "/umee.leverage.v1.MsgSupply",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/umee.leverage.v1.MsgWithdraw",
        value
      };
    },

    collateralize(value: MsgCollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgCollateralize",
        value
      };
    },

    decollateralize(value: MsgDecollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgDecollateralize",
        value
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/umee.leverage.v1.MsgBorrow",
        value
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/umee.leverage.v1.MsgRepay",
        value
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/umee.leverage.v1.MsgLiquidate",
        value
      };
    }

  },
  toJSON: {
    supply(value: MsgSupply) {
      return {
        typeUrl: "/umee.leverage.v1.MsgSupply",
        value: MsgSupply.toJSON(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/umee.leverage.v1.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },

    collateralize(value: MsgCollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgCollateralize",
        value: MsgCollateralize.toJSON(value)
      };
    },

    decollateralize(value: MsgDecollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgDecollateralize",
        value: MsgDecollateralize.toJSON(value)
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/umee.leverage.v1.MsgBorrow",
        value: MsgBorrow.toJSON(value)
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/umee.leverage.v1.MsgRepay",
        value: MsgRepay.toJSON(value)
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/umee.leverage.v1.MsgLiquidate",
        value: MsgLiquidate.toJSON(value)
      };
    }

  },
  fromJSON: {
    supply(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgSupply",
        value: MsgSupply.fromJSON(value)
      };
    },

    withdraw(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },

    collateralize(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgCollateralize",
        value: MsgCollateralize.fromJSON(value)
      };
    },

    decollateralize(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgDecollateralize",
        value: MsgDecollateralize.fromJSON(value)
      };
    },

    borrow(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgBorrow",
        value: MsgBorrow.fromJSON(value)
      };
    },

    repay(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgRepay",
        value: MsgRepay.fromJSON(value)
      };
    },

    liquidate(value: any) {
      return {
        typeUrl: "/umee.leverage.v1.MsgLiquidate",
        value: MsgLiquidate.fromJSON(value)
      };
    }

  },
  fromPartial: {
    supply(value: MsgSupply) {
      return {
        typeUrl: "/umee.leverage.v1.MsgSupply",
        value: MsgSupply.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/umee.leverage.v1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    collateralize(value: MsgCollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgCollateralize",
        value: MsgCollateralize.fromPartial(value)
      };
    },

    decollateralize(value: MsgDecollateralize) {
      return {
        typeUrl: "/umee.leverage.v1.MsgDecollateralize",
        value: MsgDecollateralize.fromPartial(value)
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/umee.leverage.v1.MsgBorrow",
        value: MsgBorrow.fromPartial(value)
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/umee.leverage.v1.MsgRepay",
        value: MsgRepay.fromPartial(value)
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/umee.leverage.v1.MsgLiquidate",
        value: MsgLiquidate.fromPartial(value)
      };
    }

  }
};