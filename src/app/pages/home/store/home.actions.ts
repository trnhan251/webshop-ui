import { Action } from '@ngrx/store';
import {Product} from '../../../shared/models/product';
import {CartOrder} from '../../../shared/models/cart-order';

export const HOME_LOAD_START = 'HOME_LOAD_START';
export const HOME_LOAD_SUCCESS = 'HOME_LOAD_SUCCESS';
export const HOME_LOAD_FAILURE = 'HOME_LOAD_FAILURE';
export const HOME_REMOVE_PRODUCT_START = 'HOME_REMOVE_PRODUCT_START';
export const HOME_REMOVE_PRODUCT_SUCCESS = 'HOME_REMOVE_PRODUCT_SUCCESS';
export const HOME_REMOVE_PRODUCT_FAILURE = 'HOME_REMOVE_PRODUCT_FAILURE';

export class HomeLoadStart implements Action {
  readonly type = HOME_LOAD_START;
  constructor(public cartOrders: CartOrder[]) {}
}

export class HomeLoadSuccess implements Action {
  readonly type = HOME_LOAD_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class HomeLoadFailure implements Action {
  readonly type = HOME_LOAD_FAILURE;
  constructor(public payload: string) {}
}

export class HomeRemoveProductStart implements Action {
  readonly type = HOME_REMOVE_PRODUCT_START;
  constructor(public payload: Product) {}
}


export type HomeActions = HomeLoadStart
  | HomeLoadSuccess
  | HomeLoadFailure
  | HomeRemoveProductStart;
