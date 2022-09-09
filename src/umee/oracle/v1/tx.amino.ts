import { AminoMsg } from "@cosmjs/amino";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export interface AminoMsgAggregateExchangeRatePrevote extends AminoMsg {
  type: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote";
  value: {
    hash: string;
    feeder: string;
    validator: string;
  };
}
export interface AminoMsgAggregateExchangeRateVote extends AminoMsg {
  type: "/umee.oracle.v1.MsgAggregateExchangeRateVote";
  value: {
    salt: string;
    exchange_rates: string;
    feeder: string;
    validator: string;
  };
}
export interface AminoMsgDelegateFeedConsent extends AminoMsg {
  type: "/umee.oracle.v1.MsgDelegateFeedConsent";
  value: {
    operator: string;
    delegate: string;
  };
}
export const AminoConverter = {
  "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
    aminoType: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
    toAmino: ({
      hash,
      feeder,
      validator
    }: MsgAggregateExchangeRatePrevote): AminoMsgAggregateExchangeRatePrevote["value"] => {
      return {
        hash,
        feeder,
        validator
      };
    },
    fromAmino: ({
      hash,
      feeder,
      validator
    }: AminoMsgAggregateExchangeRatePrevote["value"]): MsgAggregateExchangeRatePrevote => {
      return {
        hash,
        feeder,
        validator
      };
    }
  },
  "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
    aminoType: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
    toAmino: ({
      salt,
      exchangeRates,
      feeder,
      validator
    }: MsgAggregateExchangeRateVote): AminoMsgAggregateExchangeRateVote["value"] => {
      return {
        salt,
        exchange_rates: exchangeRates,
        feeder,
        validator
      };
    },
    fromAmino: ({
      salt,
      exchange_rates,
      feeder,
      validator
    }: AminoMsgAggregateExchangeRateVote["value"]): MsgAggregateExchangeRateVote => {
      return {
        salt,
        exchangeRates: exchange_rates,
        feeder,
        validator
      };
    }
  },
  "/umee.oracle.v1.MsgDelegateFeedConsent": {
    aminoType: "/umee.oracle.v1.MsgDelegateFeedConsent",
    toAmino: ({
      operator,
      delegate
    }: MsgDelegateFeedConsent): AminoMsgDelegateFeedConsent["value"] => {
      return {
        operator,
        delegate
      };
    },
    fromAmino: ({
      operator,
      delegate
    }: AminoMsgDelegateFeedConsent["value"]): MsgDelegateFeedConsent => {
      return {
        operator,
        delegate
      };
    }
  }
};