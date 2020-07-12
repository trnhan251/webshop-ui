import {Component, Input, NgModule, OnInit} from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from '../header/header.component';
import {Product} from '../../models/product';
import {CartOrder} from '../../models/cart-order';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Input() cartItem: CartOrder;
  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
  ],
  declarations: [ CartItemComponent ],
  exports: [ CartItemComponent ]
})
export class CartItemModule { }
