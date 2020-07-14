import { Component, OnInit } from '@angular/core';
import * as CartActions from '../cart-page/store/cart.actions';
import {CartOrder} from '../../shared/models/cart-order';
import {Store} from '@ngrx/store';
import * as fromApp from '../../shared/store/app.reducer';
import {CheckoutOrder} from '../../shared/models/checkout-order';
import {Order} from '../../shared/models/order';
import {ShippingOrder} from '../../shared/models/shipping-order';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public cartOrders: CartOrder[];
  public checkoutInfo: CheckoutOrder;
  public shippingOrder: ShippingOrder;
  constructor(private store: Store<fromApp.AppState>) {
    this.store.select('checkout').subscribe(checkoutState => {
      this.checkoutInfo = checkoutState.checkoutInfo;
      this.shippingOrder = checkoutState.shippingOrder;
      this.cartOrders = checkoutState.cartOrders;
    });
  }
  ngOnInit() {
  }

}
