import { Component, OnInit } from '@angular/core';
import * as CartActions from '../cart-page/store/cart.actions';
import {CartOrder} from '../../shared/models/cart-order';
import {Store} from '@ngrx/store';
import * as fromApp from '../../shared/store/app.reducer';
import {CheckoutOrder} from '../../shared/models/checkout-order';
import {Order} from '../../shared/models/order';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public cartOrders: CartOrder[];
  public checkoutInfo: CheckoutOrder;
  public order: Order;
  constructor(private store: Store<fromApp.AppState>) {
    this.store.select('cart').subscribe(cartState => {
      this.cartOrders = cartState.cartOrders;
    });
    this.store.select('checkout').subscribe(checkoutState => {
      this.checkoutInfo = checkoutState.checkoutInfo;
      this.order = checkoutState.order;
    });
    if (localStorage.getItem('sessionId') != null) {
      this.store.dispatch(new CartActions.CartLoadStart());
    }
  }
  ngOnInit() {
  }

}
