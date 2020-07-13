import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {HeaderModule} from '../shared/components/header/header.component';
import {BannerModule} from '../shared/components/banner/banner.component';
import {ProductItemModule} from '../shared/components/product-item/product-item.component';
import {MatButtonModule, MatGridListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {CartPageComponent} from './cart-page/cart-page.component';
import {CartItemModule} from '../shared/components/cart-item/cart-item.component';
import {RouterModule} from '@angular/router';
import {CartInfoBoxModule} from '../shared/components/cart-info-box/cart-info-box.component';

@NgModule({
  declarations: [
    HomeComponent,
    CartPageComponent
  ],
  imports: [
    HeaderModule,
    BannerModule,
    ProductItemModule,
    MatGridListModule,
    CommonModule,
    CartItemModule,
    MatButtonModule,
    RouterModule,
    CartInfoBoxModule
  ],
  exports: [
    HomeComponent,
    CartPageComponent
  ]
})
export class PagesModule { }
