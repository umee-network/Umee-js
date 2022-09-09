import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSupply, MsgSupplyResponse, MsgWithdraw, MsgWithdrawResponse, MsgCollateralize, MsgCollateralizeResponse, MsgDecollateralize, MsgDecollateralizeResponse, MsgBorrow, MsgBorrowResponse, MsgRepay, MsgRepayResponse, MsgLiquidate, MsgLiquidateResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  supply(request: MsgSupply): Promise<MsgSupplyResponse>;
  /*Supply moves tokens from user balance to the module for lending or collateral.
  The user receives uTokens in return.*/

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /*Withdraw moves previously supplied tokens from the module back to the user balance in
  exchange for burning uTokens.*/

  collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse>;
  /*Collateralize enables selected uTokens as collateral, which moves them to the module.*/

  decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse>;
  /*Decollateralize disables selected uTokens as collateral. They are returned to the user's
  balance from the module.*/

  borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
  /*Borrow allows a user to borrow tokens from the module if they have sufficient collateral.*/

  repay(request: MsgRepay): Promise<MsgRepayResponse>;
  /*Repay allows a user to repay previously borrowed tokens and interest.*/

  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
  /*Liquidate allows a user to repay a different user's borrowed coins in exchange for some
  of the target's collateral.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.supply = this.supply.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.collateralize = this.collateralize.bind(this);
    this.decollateralize = this.decollateralize.bind(this);
    this.borrow = this.borrow.bind(this);
    this.repay = this.repay.bind(this);
    this.liquidate = this.liquidate.bind(this);
  }

  supply(request: MsgSupply): Promise<MsgSupplyResponse> {
    const data = MsgSupply.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Supply", data);
    return promise.then(data => MsgSupplyResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse> {
    const data = MsgCollateralize.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Collateralize", data);
    return promise.then(data => MsgCollateralizeResponse.decode(new _m0.Reader(data)));
  }

  decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse> {
    const data = MsgDecollateralize.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Decollateralize", data);
    return promise.then(data => MsgDecollateralizeResponse.decode(new _m0.Reader(data)));
  }

  borrow(request: MsgBorrow): Promise<MsgBorrowResponse> {
    const data = MsgBorrow.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Borrow", data);
    return promise.then(data => MsgBorrowResponse.decode(new _m0.Reader(data)));
  }

  repay(request: MsgRepay): Promise<MsgRepayResponse> {
    const data = MsgRepay.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Repay", data);
    return promise.then(data => MsgRepayResponse.decode(new _m0.Reader(data)));
  }

  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse> {
    const data = MsgLiquidate.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Liquidate", data);
    return promise.then(data => MsgLiquidateResponse.decode(new _m0.Reader(data)));
  }

}