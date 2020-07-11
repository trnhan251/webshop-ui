import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {Store} from '@ngrx/store';
import * as fromApp from '../../shared/store/app.reducer';
import * as HomeActions from './store/home.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Product[];
  fetchHomePending: boolean;
  fetchHomeFailure: any;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('home').subscribe(homeState => {
      this.products = homeState.products;
      this.fetchHomePending = homeState.fetchHomePending;
      this.fetchHomeFailure = homeState.fetchHomeFailure;
    });

    if (this.products == null) {
      this.store.dispatch(new HomeActions.HomeLoadStart());
    }
  }

}
