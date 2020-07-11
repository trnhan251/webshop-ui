import {Component, NgModule, OnInit} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
  ],
  declarations: [ ProductItemComponent ],
  exports: [ ProductItemComponent ]
})
export class ProductItemModule { }
