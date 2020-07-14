import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../../pages/home/store/home.reducer';
import * as fromCart from '../../pages/cart-page/store/cart.reducer';
import * as fromCheckout from '../../pages/confirmation/store/checkout.reducer';
export interface AppState {
  home: fromHome.State;
  cart: fromCart.State;
  checkout: fromCheckout.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  home: fromHome.HomeReducer,
  cart: fromCart.CartReducer,
  checkout: fromCheckout.CheckoutReducer
};
