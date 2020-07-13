import {Component, Input, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {CartOrder} from '../../models/cart-order';
import {Product} from '../../models/product';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-confirmation-item',
  templateUrl: './confirmation-item.component.html',
  styleUrls: ['./confirmation-item.component.css']
})
export class ConfirmationItemComponent implements OnInit {
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
}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ConfirmationItemComponent ],
  exports: [ ConfirmationItemComponent ]
})
export class ConfirmationItemModule { }
