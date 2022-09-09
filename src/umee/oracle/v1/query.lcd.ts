import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle";
import { LCDClient } from "@osmonauts/lcd";
import { QueryExchangeRates, QueryExchangeRatesResponse, QueryActiveExchangeRates, QueryActiveExchangeRatesResponse, QueryFeederDelegation, QueryFeederDelegationResponse, QueryMissCounter, QueryMissCounterResponse, QuerySlashWindow, QuerySlashWindowResponse, QueryAggregatePrevote, QueryAggregatePrevoteResponse, QueryAggregatePrevotes, QueryAggregatePrevotesResponse, QueryAggregateVote, QueryAggregateVoteResponse, QueryAggregateVotes, QueryAggregateVotesResponse, QueryParams, QueryParamsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* ExchangeRates returns exchange rates of all denoms,
  or, if specified, returns a single denom */
  async exchangeRates(params: QueryExchangeRates): Promise<QueryExchangeRatesResponse> {
    const endpoint = `umee/oracle/v1/denoms/exchange_rates/${params.denom}`;
    return await this.request<QueryExchangeRatesResponse>(endpoint);
  }

  /* ActiveExchangeRates returns all active denoms */
  async activeExchangeRates(_params: QueryActiveExchangeRates = {}): Promise<QueryActiveExchangeRatesResponse> {
    const endpoint = `umee/oracle/v1/denoms/active_exchange_rates`;
    return await this.request<QueryActiveExchangeRatesResponse>(endpoint);
  }

  /* FeederDelegation returns feeder delegation of a validator */
  async feederDelegation(params: QueryFeederDelegation): Promise<QueryFeederDelegationResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddr !== "undefined") {
      options.params.validator_addr = params.validatorAddr;
    }

    const endpoint = `umee/oracle/v1/validators/${params.validatorAddr}/feeder`;
    return await this.request<QueryFeederDelegationResponse>(endpoint, options);
  }

  /* MissCounter returns oracle miss counter of a validator */
  async missCounter(params: QueryMissCounter): Promise<QueryMissCounterResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddr !== "undefined") {
      options.params.validator_addr = params.validatorAddr;
    }

    const endpoint = `umee/oracle/v1/validators/${params.validatorAddr}/miss`;
    return await this.request<QueryMissCounterResponse>(endpoint, options);
  }

  /* SlashWindow returns slash window information */
  async slashWindow(_params: QuerySlashWindow = {}): Promise<QuerySlashWindowResponse> {
    const endpoint = `umee/oracle/v1/slash_window`;
    return await this.request<QuerySlashWindowResponse>(endpoint);
  }

  /* AggregatePrevote returns an aggregate prevote of a validator */
  async aggregatePrevote(params: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddr !== "undefined") {
      options.params.validator_addr = params.validatorAddr;
    }

    const endpoint = `umee/oracle/v1/validators/${params.validatorAddr}/aggregate_prevote`;
    return await this.request<QueryAggregatePrevoteResponse>(endpoint, options);
  }

  /* AggregatePrevotes returns aggregate prevotes of all validators */
  async aggregatePrevotes(_params: QueryAggregatePrevotes = {}): Promise<QueryAggregatePrevotesResponse> {
    const endpoint = `umee/oracle/v1/validators/aggregate_prevotes`;
    return await this.request<QueryAggregatePrevotesResponse>(endpoint);
  }

  /* AggregateVote returns an aggregate vote of a validator */
  async aggregateVote(params: QueryAggregateVote): Promise<QueryAggregateVoteResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddr !== "undefined") {
      options.params.validator_addr = params.validatorAddr;
    }

    const endpoint = `umee/oracle/v1/valdiators/${params.validatorAddr}/aggregate_vote`;
    return await this.request<QueryAggregateVoteResponse>(endpoint, options);
  }

  /* AggregateVotes returns aggregate votes of all validators */
  async aggregateVotes(_params: QueryAggregateVotes = {}): Promise<QueryAggregateVotesResponse> {
    const endpoint = `umee/oracle/v1/validators/aggregate_votes`;
    return await this.request<QueryAggregateVotesResponse>(endpoint);
  }

  /* Params queries all parameters. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponse> {
    const endpoint = `umee/oracle/v1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

}