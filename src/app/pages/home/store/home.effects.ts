
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as HomeActions from './home.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {error} from 'util';
import {of} from 'rxjs';
import {Product} from '../../../shared/models/product';
import * as CartActions from '../../cart-page/store/cart.actions';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  homeLoadStart = this.actions$.pipe(
    ofType(HomeActions.HOME_LOAD_START),
    switchMap((data: HomeActions.HomeLoadStart) => {
      const baseUrL = environment.catalogUrl + '/catalog';
      const cartOrders = data.cartOrders;
      return this.http.get(baseUrL).pipe(
        map((resData: Product[]) => {
          console.log(resData);
          cartOrders.forEach(cart => {
            const product = resData.find(p => p.id === cart.productId);
            const index = resData.indexOf(product);
            resData.splice(index, 1);
          });
          return new HomeActions.HomeLoadSuccess(resData);
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in HomeLoadStart occurred!';
          return of(new HomeActions.HomeLoadFailure(errorRes));
        })
      );
    })
  );
}

