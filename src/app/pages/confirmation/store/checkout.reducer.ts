import * as CheckoutActions from './checkout.actions';
import {Order} from '../../../shared/models/order';
import {CheckoutOrder} from '../../../shared/models/checkout-order';
export interface State {
  order: Order;
  checkoutInfo: CheckoutOrder;
  fetchCheckoutPending: boolean;
  fetchCheckoutFailure: any;
}

const initialState: State = {
  order: null,
  checkoutInfo: null,
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
        order: action.order,
        checkoutInfo: action.checkoutInfo,
        fetchCheckoutPending: false,
        fetchCheckoutFailure: null
      };
    case CheckoutActions.CHECKOUT_FAILURE:
      return {
        ...state,
        order: null,
        checkoutInfo: null,
        fetchCheckoutPending: false,
        fetchCheckoutFailure: action.payload
      };
    default:
      return state;
  }
}
