import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryExchangeRates, QueryExchangeRatesResponse, QueryActiveExchangeRates, QueryActiveExchangeRatesResponse, QueryFeederDelegation, QueryFeederDelegationResponse, QueryMissCounter, QueryMissCounterResponse, QuerySlashWindow, QuerySlashWindowResponse, QueryAggregatePrevote, QueryAggregatePrevoteResponse, QueryAggregatePrevotes, QueryAggregatePrevotesResponse, QueryAggregateVote, QueryAggregateVoteResponse, QueryAggregateVotes, QueryAggregateVotesResponse, QueryParams, QueryParamsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse>;
  /*ExchangeRates returns exchange rates of all denoms,
  or, if specified, returns a single denom*/

  activeExchangeRates(request: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse>;
  /*ActiveExchangeRates returns all active denoms*/

  feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse>;
  /*FeederDelegation returns feeder delegation of a validator*/

  missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse>;
  /*MissCounter returns oracle miss counter of a validator*/

  slashWindow(request: QuerySlashWindow): Promise<QuerySlashWindowResponse>;
  /*SlashWindow returns slash window information*/

  aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse>;
  /*AggregatePrevote returns an aggregate prevote of a validator*/

  aggregatePrevotes(request: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse>;
  /*AggregatePrevotes returns aggregate prevotes of all validators*/

  aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse>;
  /*AggregateVote returns an aggregate vote of a validator*/

  aggregateVotes(request: QueryAggregateVotes): Promise<QueryAggregateVotesResponse>;
  /*AggregateVotes returns aggregate votes of all validators*/

  params(request: QueryParams): Promise<QueryParamsResponse>;
  /*Params queries all parameters.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.exchangeRates = this.exchangeRates.bind(this);
    this.activeExchangeRates = this.activeExchangeRates.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.slashWindow = this.slashWindow.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
  }

  exchangeRates(request: QueryExchangeRates): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRates.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ExchangeRates", data);
    return promise.then(data => QueryExchangeRatesResponse.decode(new _m0.Reader(data)));
  }

  activeExchangeRates(request: QueryActiveExchangeRates): Promise<QueryActiveExchangeRatesResponse> {
    const data = QueryActiveExchangeRates.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "ActiveExchangeRates", data);
    return promise.then(data => QueryActiveExchangeRatesResponse.decode(new _m0.Reader(data)));
  }

  feederDelegation(request: QueryFeederDelegation): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegation.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "FeederDelegation", data);
    return promise.then(data => QueryFeederDelegationResponse.decode(new _m0.Reader(data)));
  }

  missCounter(request: QueryMissCounter): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounter.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "MissCounter", data);
    return promise.then(data => QueryMissCounterResponse.decode(new _m0.Reader(data)));
  }

  slashWindow(request: QuerySlashWindow): Promise<QuerySlashWindowResponse> {
    const data = QuerySlashWindow.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "SlashWindow", data);
    return promise.then(data => QuerySlashWindowResponse.decode(new _m0.Reader(data)));
  }

  aggregatePrevote(request: QueryAggregatePrevote): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevote.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevote", data);
    return promise.then(data => QueryAggregatePrevoteResponse.decode(new _m0.Reader(data)));
  }

  aggregatePrevotes(request: QueryAggregatePrevotes): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotes.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregatePrevotes", data);
    return promise.then(data => QueryAggregatePrevotesResponse.decode(new _m0.Reader(data)));
  }

  aggregateVote(request: QueryAggregateVote): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVote.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVote", data);
    return promise.then(data => QueryAggregateVoteResponse.decode(new _m0.Reader(data)));
  }

  aggregateVotes(request: QueryAggregateVotes): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotes.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "AggregateVotes", data);
    return promise.then(data => QueryAggregateVotesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParams): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}