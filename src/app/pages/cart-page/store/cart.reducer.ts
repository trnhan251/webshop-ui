import * as CartActions from './cart.actions';
import {CartOrder} from '../../../shared/models/cart-order';
export interface State {
  cartOrders: CartOrder[];
  fetchCartPending: boolean;
  fetchCartFailure: any;
  fetchAddOrderPending: boolean;
  fetchAddOrderFailure: any;
  fetchSessionPending: boolean;
  fetchSessionFailure: any;
}

const initialState: State = {
  cartOrders: null,
  fetchCartPending: false,
  fetchCartFailure: null,
  fetchAddOrderPending: false,
  fetchAddOrderFailure: null,
  fetchSessionPending: false,
  fetchSessionFailure: null
};

export function CartReducer(state = initialState, action: CartActions.CartActions) {
  switch (action.type) {
    case CartActions.CART_LOAD_START:
      return {
        ...state,
        fetchCartPending: true,
        fetchCartFailure: null
      };
    case CartActions.CART_LOAD_SUCCESS:
      return {
        ...state,
        cartOrders: action.payload,
        fetchCartPending: false,
        fetchCartFailure: null
      };
    case CartActions.CART_LOAD_FAILURE:
      return {
        ...state,
        cartOrders: null,
        fetchCartPending: false,
        fetchCartFailure: action.payload
      };
    case CartActions.CART_ADD_ITEM_START:
      return {
        ...state,
        fetchAddOrderPending: true,
        fetchCartFailure: null
      };
    case CartActions.CART_ADD_ITEM_SUCCESS:
      return {
        ...state,
        cartOrders: [...state.cartOrders, action.payload],
        fetchAddOrderPending: false,
        fetchCartFailure: null
      };
    case CartActions.CART_ADD_ITEM_FAILURE:
      return {
        ...state,
        fetchAddOrderPending: false,
        fetchCartFailure: action.payload
      };
    case CartActions.CART_REQUEST_SESSION_START:
      return {
        ...state,
        fetchSessionPending: true,
        fetchSessionFailure: null
      };
    case CartActions.CART_REQUEST_SESSION_SUCCESS:
      return {
        ...state,
        fetchSessionPending: false,
        fetchSessionFailure: null
      };
    case CartActions.CART_REQUEST_SESSION_FAILURE:
      return {
        ...state,
        fetchSessionPending: false,
        fetchSessionFailure: action.payload
      };
    default:
      return state;
  }
}
