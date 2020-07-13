import {Component, Input, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from '../header/header.component';
import {Product} from '../../models/product';
import {CartOrder} from '../../models/cart-order';
import * as fromApp from '../../../shared/store/app.reducer';
import {Store} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import * as CartActions from '../../../pages/cart-page/store/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartOrder;
  public products: Product[];
  public product: Product;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('cart').subscribe(cartState => {
      this.products = cartState.products;
      if (this.products != null) {
        this.product = this.products.find(p => p.id === this.cartItem.productId);
      }
    });
  }

  addOneItem() {
    const newItem = {...this.cartItem, quantity: this.cartItem.quantity + 1};
    this.store.dispatch(new CartActions.CartChangeItemStart(newItem));
  }

  minusOneItem() {
    const newItem = {...this.cartItem, quantity: this.cartItem.quantity - 1};
    if (newItem.quantity > 0) {
      this.store.dispatch(new CartActions.CartChangeItemStart(newItem));
    } else {
      this.store.dispatch(new CartActions.CartDeleteItemStart(this.cartItem));
    }
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    CommonModule
  ],
  declarations: [ CartItemComponent ],
  exports: [ CartItemComponent ]
})
export class CartItemModule { }
