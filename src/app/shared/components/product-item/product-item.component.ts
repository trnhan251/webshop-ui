import {Component, Input, NgModule, OnInit} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {MatButtonModule} from '@angular/material';
import {Product} from '../../models/product';
import {CartOrder} from '../../models/cart-order';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as CartActions from '../../../pages/cart-page/store/cart.actions';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }
  addNewItem() {
    this.store.dispatch(new CartActions.CartAddItemStart(this.product));
  }
}

@NgModule({
  imports: [
    MatButtonModule
  ],
  declarations: [ ProductItemComponent ],
  exports: [ ProductItemComponent ]
})
export class ProductItemModule { }
