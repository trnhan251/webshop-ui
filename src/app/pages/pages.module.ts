import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {HeaderModule} from '../shared/components/header/header.component';
import {BannerModule} from '../shared/components/banner/banner.component';
import {ProductItemModule} from '../shared/components/product-item/product-item.component';
import {MatGridListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule,
    BannerModule,
    ProductItemModule,
    MatGridListModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
