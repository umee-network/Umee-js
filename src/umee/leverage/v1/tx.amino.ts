import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgSupply, MsgWithdraw, MsgCollateralize, MsgDecollateralize, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export interface AminoMsgSupply extends AminoMsg {
  type: "/umee.leverage.v1.MsgSupply";
  value: {
    supplier: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgWithdraw extends AminoMsg {
  type: "/umee.leverage.v1.MsgWithdraw";
  value: {
    supplier: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgCollateralize extends AminoMsg {
  type: "/umee.leverage.v1.MsgCollateralize";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgDecollateralize extends AminoMsg {
  type: "/umee.leverage.v1.MsgDecollateralize";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBorrow extends AminoMsg {
  type: "/umee.leverage.v1.MsgBorrow";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgRepay extends AminoMsg {
  type: "/umee.leverage.v1.MsgRepay";
  value: {
    borrower: string;
    asset: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgLiquidate extends AminoMsg {
  type: "/umee.leverage.v1.MsgLiquidate";
  value: {
    liquidator: string;
    borrower: string;
    repayment: {
      denom: string;
      amount: string;
    };
    reward_denom: string;
  };
}
export const AminoConverter = {
  "/umee.leverage.v1.MsgSupply": {
    aminoType: "/umee.leverage.v1.MsgSupply",
    toAmino: ({
      supplier,
      asset
    }: MsgSupply): AminoMsgSupply["value"] => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: Long.fromNumber(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      supplier,
      asset
    }: AminoMsgSupply["value"]): MsgSupply => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgWithdraw": {
    aminoType: "/umee.leverage.v1.MsgWithdraw",
    toAmino: ({
      supplier,
      asset
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: Long.fromNumber(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      supplier,
      asset
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        supplier,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgCollateralize": {
    aminoType: "/umee.leverage.v1.MsgCollateralize",
    toAmino: ({
      borrower,
      asset
    }: MsgCollateralize): AminoMsgCollateralize["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromNumber(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: AminoMsgCollateralize["value"]): MsgCollateralize => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgDecollateralize": {
    aminoType: "/umee.leverage.v1.MsgDecollateralize",
    toAmino: ({
      borrower,
      asset
    }: MsgDecollateralize): AminoMsgDecollateralize["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromNumber(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: AminoMsgDecollateralize["value"]): MsgDecollateralize => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgBorrow": {
    aminoType: "/umee.leverage.v1.MsgBorrow",
    toAmino: ({
      borrower,
      asset
    }: MsgBorrow): AminoMsgBorrow["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromNumber(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: AminoMsgBorrow["value"]): MsgBorrow => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgRepay": {
    aminoType: "/umee.leverage.v1.MsgRepay",
    toAmino: ({
      borrower,
      asset
    }: MsgRepay): AminoMsgRepay["value"] => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: Long.fromNumber(asset.amount).toString()
        }
      };
    },
    fromAmino: ({
      borrower,
      asset
    }: AminoMsgRepay["value"]): MsgRepay => {
      return {
        borrower,
        asset: {
          denom: asset.denom,
          amount: asset.amount
        }
      };
    }
  },
  "/umee.leverage.v1.MsgLiquidate": {
    aminoType: "/umee.leverage.v1.MsgLiquidate",
    toAmino: ({
      liquidator,
      borrower,
      repayment,
      rewardDenom
    }: MsgLiquidate): AminoMsgLiquidate["value"] => {
      return {
        liquidator,
        borrower,
        repayment: {
          denom: repayment.denom,
          amount: Long.fromNumber(repayment.amount).toString()
        },
        reward_denom: rewardDenom
      };
    },
    fromAmino: ({
      liquidator,
      borrower,
      repayment,
      reward_denom
    }: AminoMsgLiquidate["value"]): MsgLiquidate => {
      return {
        liquidator,
        borrower,
        repayment: {
          denom: repayment.denom,
          amount: repayment.amount
        },
        rewardDenom: reward_denom
      };
    }
  }
};