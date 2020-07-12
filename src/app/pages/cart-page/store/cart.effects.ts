
import { Actions, ofType, Effect } from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as CartActions from './cart.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {error} from 'util';
import {of} from 'rxjs';
import {CartOrder} from '../../../shared/models/cart-order';
import * as HomeActions from '../../home/store/home.actions';
@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  cartLoadStart = this.actions$.pipe(
    ofType(CartActions.CART_LOAD_START),
    mergeMap(() => {
      const baseUrL = environment.cartUrl + '/cart';
      const params = new HttpParams();
      params.append('sessionId', localStorage.getItem('sessionId'));
      return this.http.get(baseUrL, {
        params: {
          sessionId: localStorage.getItem('sessionId')
        }}).pipe(
        map((resData: any) => {
          console.log(resData);
          return new CartActions.CartLoadSuccess(resData);
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in CartLoadStart occurred!';
          return of(new CartActions.CartLoadFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  cartLoadSuccess = this.actions$.pipe(
    ofType(CartActions.CART_LOAD_SUCCESS),
    switchMap((data: CartActions.CartLoadSuccess) => {
      return of(new HomeActions.HomeLoadStart(data.payload));
    })
  );

  @Effect()
  cartAddItemStart = this.actions$.pipe(
    ofType(CartActions.CART_ADD_ITEM_START),
    switchMap((data: CartActions.CartAddItemStart) => {
      const baseUrL = environment.cartUrl + '/cart';

      const newOrder: CartOrder = {
        productId: data.payload.id,
        quantity: 1
      };

      return this.http.post<CartOrder>(baseUrL, newOrder, {
          params: {
            sessionId: localStorage.getItem('sessionId')
          }
        }).pipe(
        map((resData: any) => {
          console.log(resData);
          return new CartActions.CartAddItemSuccess(resData, data.payload);
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in CartAddItemStart occurred!';
          return of(new CartActions.CartLoadFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  cartAddItemSuccess = this.actions$.pipe(
    ofType(CartActions.CART_ADD_ITEM_SUCCESS),
    switchMap((data: CartActions.CartAddItemSuccess) => {
      return of(new HomeActions.HomeRemoveProductStart(data.product));
    })
  );

  @Effect()
  cartRequestSessionStart = this.actions$.pipe(
    ofType(CartActions.CART_REQUEST_SESSION_START),
    mergeMap(() => {
      const baseUrl = environment.cartUrl + '/cart/session';
      return this.http.get(baseUrl, {responseType: 'text'}).pipe(
        map((resData: any) => {
          return new CartActions.CartRequestSessionSuccess(resData);
        }),
        catchError(errorRes => {
          return of(new CartActions.CartRequestSessionFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  cartRequestSessionSuccess = this.actions$.pipe(
    ofType(CartActions.CART_REQUEST_SESSION_SUCCESS),
    mergeMap((data: CartActions.CartRequestSessionSuccess) => {
      localStorage.setItem('sessionId', data.payload);
      return of(new CartActions.CartLoadStart());
    })
  );
}

