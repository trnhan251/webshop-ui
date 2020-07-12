import {Component, NgModule, OnInit} from '@angular/core';
import {CartItemComponent} from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-info-box',
  templateUrl: './cart-info-box.component.html',
  styleUrls: ['./cart-info-box.component.css']
})
export class CartInfoBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
  ],
  declarations: [ CartInfoBoxComponent ],
  exports: [ CartInfoBoxComponent ]
})
export class CartInfoBoxModule { }
