import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import * as fromApp from '../../shared/store/app.reducer';
import {Store} from '@ngrx/store';
import {CartOrder} from '../../shared/models/cart-order';
import * as CartActions from './store/cart.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cartOrders: CartOrder[];
  public products: Product[];
  public totalCost: number;
  public shippingCost: number;

  constructor(private store: Store<fromApp.AppState>) {
    this.store.select('cart').subscribe(cartState => {
      this.cartOrders = cartState.cartOrders;
      this.products = cartState.products;
      this.totalCost = 0;
      this.cartOrders.forEach(cartOrder => {
         const product = this.products.find(p => p.id === cartOrder.productId);
         this.totalCost = this.totalCost + (cartOrder.quantity * product.price);
      });
      this.shippingCost = (this.totalCost > 100) ? 0 : 10;
    });
    if (localStorage.getItem('sessionId') != null) {
      this.store.dispatch(new CartActions.CartLoadStart());
    }
    if (localStorage.getItem('sessionId') == null) {
      this.store.dispatch(new CartActions.CartRequestSessionStart());
    }
  }

  ngOnInit() {
  }

  emptyCart() {
    this.store.dispatch(new CartActions.CartDeleteAllItemStart());
  }


}
