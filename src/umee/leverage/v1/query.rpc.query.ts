import { Params, Token } from "./leverage";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParams, QueryParamsResponse, QueryRegisteredTokens, QueryRegisteredTokensResponse, QueryMarketSummary, QueryMarketSummaryResponse, QueryAccountBalances, QueryAccountBalancesResponse, QueryAccountSummary, QueryAccountSummaryResponse, QueryLiquidationTargets, QueryLiquidationTargetsResponse, QueryBadDebts, QueryBadDebtsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParams): Promise<QueryParamsResponse>;
  /*Params queries the parameters of the x/leverage module.*/

  registeredTokens(request: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
  /*RegisteredTokens queries for all the registered tokens.*/

  marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
  /*MarketSummary queries a base asset's current borrowing and supplying conditions.*/

  accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
  /*AccountBalances queries an account's current supply, collateral, and borrow positions.*/

  accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
  /*AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully.*/

  liquidationTargets(request: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
  /*LiquidationTargets queries a list of all borrower account addresses eligible for liquidation.*/

  badDebts(request: QueryBadDebts): Promise<QueryBadDebtsResponse>;
  /*BadDebts queries a list of borrow positions that have been marked for bad debt repayment.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.registeredTokens = this.registeredTokens.bind(this);
    this.marketSummary = this.marketSummary.bind(this);
    this.accountBalances = this.accountBalances.bind(this);
    this.accountSummary = this.accountSummary.bind(this);
    this.liquidationTargets = this.liquidationTargets.bind(this);
    this.badDebts = this.badDebts.bind(this);
  }

  params(request: QueryParams): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  registeredTokens(request: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse> {
    const data = QueryRegisteredTokens.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "RegisteredTokens", data);
    return promise.then(data => QueryRegisteredTokensResponse.decode(new _m0.Reader(data)));
  }

  marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse> {
    const data = QueryMarketSummary.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "MarketSummary", data);
    return promise.then(data => QueryMarketSummaryResponse.decode(new _m0.Reader(data)));
  }

  accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse> {
    const data = QueryAccountBalances.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "AccountBalances", data);
    return promise.then(data => QueryAccountBalancesResponse.decode(new _m0.Reader(data)));
  }

  accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse> {
    const data = QueryAccountSummary.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "AccountSummary", data);
    return promise.then(data => QueryAccountSummaryResponse.decode(new _m0.Reader(data)));
  }

  liquidationTargets(request: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse> {
    const data = QueryLiquidationTargets.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "LiquidationTargets", data);
    return promise.then(data => QueryLiquidationTargetsResponse.decode(new _m0.Reader(data)));
  }

  badDebts(request: QueryBadDebts): Promise<QueryBadDebtsResponse> {
    const data = QueryBadDebts.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "BadDebts", data);
    return promise.then(data => QueryBadDebtsResponse.decode(new _m0.Reader(data)));
  }

}