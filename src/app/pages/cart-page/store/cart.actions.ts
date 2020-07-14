import { Action } from '@ngrx/store';
import {Product} from '../../../shared/models/product';
import {CartOrder} from '../../../shared/models/cart-order';

export const CART_LOAD_START = 'CART_LOAD_START';
export const CART_LOAD_SUCCESS = 'CART_LOAD_SUCCESS';
export const CART_LOAD_FAILURE = 'CART_LOAD_FAILURE';
export const CART_ADD_ITEM_START = 'CART_ADD_ITEM_START';
export const CART_ADD_ITEM_SUCCESS = 'CART_ADD_ITEM_SUCCESS';
export const CART_ADD_ITEM_FAILURE = 'CART_ADD_ITEM_FAILURE';
export const CART_REQUEST_SESSION_START = 'CART_REQUEST_SESSION_START';
export const CART_REQUEST_SESSION_SUCCESS = 'CART_REQUEST_SESSION_SUCCESS';
export const CART_REQUEST_SESSION_FAILURE = 'CART_REQUEST_SESSION_FAILURE';
export const CART_REQUEST_PRODUCT_START = 'CART_REQUEST_PRODUCT_START';
export const CART_REQUEST_PRODUCT_SUCCESS = 'CART_REQUEST_PRODUCT_SUCCESS';
export const CART_REQUEST_PRODUCT_FAILURE = 'CART_REQUEST_PRODUCT_FAILURE';
export const CART_CHANGE_ITEM_START = 'CART_CHANGE_ITEM_START';
export const CART_CHANGE_ITEM_SUCCESS = 'CART_CHANGE_ITEM_SUCCESS';
export const CART_CHANGE_ITEM_FAILURE = 'CART_CHANGE_ITEM_FAILURE';
export const CART_DELETE_ITEM_START = 'CART_DELETE_ITEM_START';
export const CART_DELETE_ITEM_SUCCESS = 'CART_DELETE_ITEM_SUCCESS';
export const CART_DELETE_ITEM_FAILURE = 'CART_DELETE_ITEM_FAILURE';
export const CART_DELETE_ALL_ITEMS_START = 'CART_DELETE_ALL_ITEMS_START';
export const CART_DELETE_ALL_ITEMS_SUCCESS = 'CART_DELETE_ALL_ITEMS_SUCCESS';
export const CART_DELETE_ALL_ITEMS_FAILURE = 'CART_DELETE_ALL_ITEMS_FAILURE';


export class CartLoadStart implements Action {
  readonly type = CART_LOAD_START;
  constructor() {}
}

export class CartLoadSuccess implements Action {
  readonly type = CART_LOAD_SUCCESS;
  constructor(public payload: CartOrder[]) {}
}

export class CartLoadFailure implements Action {
  readonly type = CART_LOAD_FAILURE;
  constructor(public payload: string) {}
}

export class CartAddItemStart implements Action {
  readonly type = CART_ADD_ITEM_START;
  constructor(public payload: Product) {}
}

export class CartAddItemSuccess implements Action {
  readonly type = CART_ADD_ITEM_SUCCESS;
  constructor(public payload: CartOrder, public product: Product) {}
}

export class CartAddItemFailure implements Action {
  readonly type = CART_ADD_ITEM_FAILURE;
  constructor(public payload: string) {}
}

export class CartRequestSessionStart implements Action {
  readonly type = CART_REQUEST_SESSION_START;
  constructor() {}
}

export class CartRequestSessionSuccess implements Action {
  readonly type = CART_REQUEST_SESSION_SUCCESS;
  constructor(public payload: string) {}
}

export class CartRequestSessionFailure implements Action {
  readonly type = CART_REQUEST_SESSION_FAILURE;
  constructor(public payload: string) {}
}

export class CartRequestProductStart implements Action {
  readonly type = CART_REQUEST_PRODUCT_START;
  constructor(public cartOrders: CartOrder[]) {}
}

export class CartRequestProductSuccess implements Action {
  readonly type = CART_REQUEST_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class CartRequestProductFailure implements Action {
  readonly type = CART_REQUEST_PRODUCT_FAILURE;
  constructor(public payload: string) {}
}

export class CartChangeItemStart implements Action {
  readonly type = CART_CHANGE_ITEM_START;
  constructor(public payload: CartOrder) {}
}

export class CartChangeItemSuccess implements Action {
  readonly type = CART_CHANGE_ITEM_SUCCESS;
  constructor(public payload: CartOrder) {}
}

export class CartChangeItemFailure implements Action {
  readonly type = CART_CHANGE_ITEM_FAILURE;
  constructor(public payload: string) {}
}

export class CartDeleteItemStart implements Action {
  readonly type = CART_DELETE_ITEM_START;
  constructor(public payload: CartOrder) {}
}

export class CartDeleteItemSuccess implements Action {
  readonly type = CART_DELETE_ITEM_SUCCESS;
  constructor(public payload: CartOrder) {}
}

export class CartDeleteItemFailure implements Action {
  readonly type = CART_DELETE_ITEM_FAILURE;
  constructor(public payload: string) {}
}

export class CartDeleteAllItemStart implements Action {
  readonly type = CART_DELETE_ALL_ITEMS_START;
  constructor() {}
}

export class CartDeleteAllItemSuccess implements Action {
  readonly type = CART_DELETE_ALL_ITEMS_SUCCESS;
  constructor() {}
}

export class CartDeleteAllItemFailure implements Action {
  readonly type = CART_DELETE_ALL_ITEMS_FAILURE;
  constructor(public payload: string) {}
}

export type CartActions = CartLoadStart
  | CartLoadSuccess
  | CartLoadFailure
  | CartAddItemStart
  | CartAddItemSuccess
  | CartAddItemFailure
  | CartRequestSessionStart
  | CartRequestSessionSuccess
  | CartRequestSessionFailure
  | CartRequestProductStart
  | CartRequestProductSuccess
  | CartRequestProductFailure
  | CartChangeItemStart
  | CartChangeItemFailure
  | CartChangeItemSuccess
  | CartDeleteItemStart
  | CartDeleteItemSuccess
  | CartDeleteItemFailure
  | CartDeleteAllItemStart
  | CartDeleteAllItemSuccess
  | CartDeleteAllItemFailure;
