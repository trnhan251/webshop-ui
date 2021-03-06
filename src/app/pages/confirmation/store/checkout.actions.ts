import { Action } from '@ngrx/store';
import {CheckoutOrder} from '../../../shared/models/checkout-order';
import {Order} from '../../../shared/models/order';
import {ShippingOrder} from '../../../shared/models/shipping-order';
import {CartOrder} from '../../../shared/models/cart-order';

export const CHECKOUT_START = 'CHECKOUT_START';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';


export class CheckoutStart implements Action {
  readonly type = CHECKOUT_START;
  constructor(public payload: CheckoutOrder, public cartOrders: CartOrder[]) {}
}

export class CheckoutSuccess implements Action {
  readonly type = CHECKOUT_SUCCESS;
  constructor(public order: ShippingOrder, public checkoutInfo: CheckoutOrder, public cartOrders: CartOrder[]) {}
}

export class CheckoutFailure implements Action {
  readonly type = CHECKOUT_FAILURE;
  constructor(public payload: string) {}
}

export type CheckoutActions = CheckoutStart
  | CheckoutSuccess
  | CheckoutFailure;
