import { Params, Token } from "./leverage";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParams, QueryParamsResponse, QueryRegisteredTokens, QueryRegisteredTokensResponse, QueryMarketSummary, QueryMarketSummaryResponse, QueryAccountBalances, QueryAccountBalancesResponse, QueryAccountSummary, QueryAccountSummaryResponse, QueryLiquidationTargets, QueryLiquidationTargetsResponse, QueryBadDebts, QueryBadDebtsResponse } from "./query";
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

  /* Params queries the parameters of the x/leverage module. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponse> {
    const endpoint = `umee/leverage/v1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* RegisteredTokens queries for all the registered tokens. */
  async registeredTokens(_params: QueryRegisteredTokens = {}): Promise<QueryRegisteredTokensResponse> {
    const endpoint = `umee/leverage/v1/registered_tokens`;
    return await this.request<QueryRegisteredTokensResponse>(endpoint);
  }

  /* MarketSummary queries a base asset's current borrowing and supplying conditions. */
  async marketSummary(params: QueryMarketSummary): Promise<QueryMarketSummaryResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `umee/leverage/v1/market_summary`;
    return await this.request<QueryMarketSummaryResponse>(endpoint, options);
  }

  /* AccountBalances queries an account's current supply, collateral, and borrow positions. */
  async accountBalances(params: QueryAccountBalances): Promise<QueryAccountBalancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `umee/leverage/v1/account_balances`;
    return await this.request<QueryAccountBalancesResponse>(endpoint, options);
  }

  /* AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */
  async accountSummary(params: QueryAccountSummary): Promise<QueryAccountSummaryResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `umee/leverage/v1/account_summary`;
    return await this.request<QueryAccountSummaryResponse>(endpoint, options);
  }

  /* LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */
  async liquidationTargets(_params: QueryLiquidationTargets = {}): Promise<QueryLiquidationTargetsResponse> {
    const endpoint = `umee/leverage/v1/liquidation_targets`;
    return await this.request<QueryLiquidationTargetsResponse>(endpoint);
  }

  /* BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */
  async badDebts(_params: QueryBadDebts = {}): Promise<QueryBadDebtsResponse> {
    const endpoint = `umee/leverage/v1/bad_debts`;
    return await this.request<QueryBadDebtsResponse>(endpoint);
  }

}