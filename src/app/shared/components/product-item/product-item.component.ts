import {Component, Input, NgModule, OnInit} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {MatButtonModule} from '@angular/material';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
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
