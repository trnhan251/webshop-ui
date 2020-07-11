import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {HeaderModule} from '../shared/components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
