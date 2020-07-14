import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {ConfirmationComponent} from './pages/confirmation/confirmation.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
