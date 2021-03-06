import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './shared/store/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PagesModule} from './pages/pages.module';
import {HeaderModule} from './shared/components/header/header.component';
import {HomeEffects} from './pages/home/store/home.effects';
import {CartEffects} from './pages/cart-page/store/cart.effects';
import {HttpClientModule} from '@angular/common/http';
import {CheckoutEffects} from './pages/confirmation/store/checkout.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([HomeEffects, CartEffects, CheckoutEffects]),
    BrowserAnimationsModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
