import * as CheckoutActions from './checkout.actions';
import {Order} from '../../../shared/models/order';
import {CheckoutOrder} from '../../../shared/models/checkout-order';
import {ShippingOrder} from '../../../shared/models/shipping-order';
import {CartOrder} from '../../../shared/models/cart-order';
export interface State {
  shippingOrder: ShippingOrder;
  checkoutInfo: CheckoutOrder;
  cartOrders: CartOrder[];
  fetchCheckoutPending: boolean;
  fetchCheckoutFailure: any;
}

const initialState: State = {
  shippingOrder: null,
  checkoutInfo: null,
  cartOrders: null,
  fetchCheckoutPending: false,
  fetchCheckoutFailure: null
};

export function CheckoutReducer(state = initialState, action: CheckoutActions.CheckoutActions) {
  switch (action.type) {
    case CheckoutActions.CHECKOUT_START:
      return {
        ...state,
        fetchCheckoutPending: true,
        fetchCheckoutFailure: null
      };
    case CheckoutActions.CHECKOUT_SUCCESS:
      return {
        ...state,
        shippingOrder: action.order,
        checkoutInfo: action.checkoutInfo,
        cartOrders: action.cartOrders,
        fetchCheckoutPending: false,
        fetchCheckoutFailure: null
      };
    case CheckoutActions.CHECKOUT_FAILURE:
      return {
        ...state,
        shippingOrder: null,
        checkoutInfo: null,
        cartOrders: null,
        fetchCheckoutPending: false,
        fetchCheckoutFailure: action.payload
      };
    default:
      return state;
  }
}
