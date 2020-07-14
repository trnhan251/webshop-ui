import * as CartActions from './cart.actions';
import {CartOrder} from '../../../shared/models/cart-order';
import {Product} from '../../../shared/models/product';
export interface State {
  cartOrders: CartOrder[];
  products: Product[];
  fetchCartPending: boolean;
  fetchCartFailure: any;
  fetchAddOrderPending: boolean;
  fetchAddOrderFailure: any;
  fetchSessionPending: boolean;
  fetchSessionFailure: any;
  fetchProductsPending: boolean;
  fetchProductsFailure: any;
  changeItemPending: boolean;
  changeItemFailure: any;
  deleteItemPending: boolean;
  deleteItemFailure: any;
  deleteAllItemPending: boolean;
  deleteAllItemFailure: any;
}

const initialState: State = {
  cartOrders: null,
  products: null,
  fetchCartPending: false,
  fetchCartFailure: null,
  fetchAddOrderPending: false,
  fetchAddOrderFailure: null,
  fetchSessionPending: false,
  fetchSessionFailure: null,
  fetchProductsPending: false,
  fetchProductsFailure: null,
  changeItemPending: false,
  changeItemFailure: null,
  deleteItemPending: false,
  deleteItemFailure: null,
  deleteAllItemPending: false,
  deleteAllItemFailure: null
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
    case CartActions.CART_REQUEST_PRODUCT_START:
      return {
        ...state,
        fetchProductsPending: true,
        fetchProductsFailure: null
      };
    case CartActions.CART_REQUEST_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        fetchProductsPending: false,
        fetchProductsFailure: null
      };
    case CartActions.CART_REQUEST_PRODUCT_FAILURE:
      return {
        ...state,
        products: null,
        fetchProductsPending: false,
        fetchProductsFailure: action.payload
      };
    case CartActions.CART_CHANGE_ITEM_START:
      return {
        ...state,
        changeItemPending: true,
        changeItemFailure: null
      };
    case CartActions.CART_CHANGE_ITEM_SUCCESS:
      const oldOrderIndex = state.cartOrders.findIndex(c => c.productId === action.payload.productId);
      const newOrders = [...state.cartOrders];
      if (oldOrderIndex !== -1) {
        newOrders[oldOrderIndex] = action.payload;
      }
      return {
        ...state,
        cartOrders: newOrders,
        changeItemPending: false,
        changeItemFailure: null
      };
    case CartActions.CART_CHANGE_ITEM_FAILURE:
      return {
        ...state,
        changeItemPending: false,
        changeItemFailure: action.payload
      };
    case CartActions.CART_DELETE_ITEM_START:
      return {
        ...state,
        deleteItemPending: true,
        deleteItemFailure: null
      };
    case CartActions.CART_DELETE_ITEM_SUCCESS:
      const newCartOrders = [...state.cartOrders];
      const orderIndex = newCartOrders.indexOf(action.payload);
      newCartOrders.splice(orderIndex, 1);
      return {
        ...state,
        cartOrders: newCartOrders,
        deleteItemPending: false,
        deleteItemFailure: null
      };
    case CartActions.CART_DELETE_ITEM_FAILURE:
      return {
        ...state,
        deleteItemPending: false,
        deleteItemFailure: action.payload
      };
    case CartActions.CART_DELETE_ALL_ITEMS_START:
      return {
        ...state,
        deleteAllItemPending: true,
        deleteAllItemFailure: null
      };
    case CartActions.CART_DELETE_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        cartOrders: [],
        deleteAllItemPending: false,
        deleteAllItemFailure: null
      };
    case CartActions.CART_DELETE_ALL_ITEMS_FAILURE:
      return {
        ...state,
        deleteAllItemPending: false,
        deleteAllItemFailure: action.payload
      };
    default:
      return state;
  }
}
