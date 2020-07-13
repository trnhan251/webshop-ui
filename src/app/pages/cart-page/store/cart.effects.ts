import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as CartActions from './cart.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
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
      const baseUrl = environment.cartUrl + '/cart';
      const params = new HttpParams();
      params.append('sessionId', localStorage.getItem('sessionId'));
      return this.http.get(baseUrl, {
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
    switchMap((data: CartActions.CartLoadSuccess) => [
      new HomeActions.HomeLoadStart(data.payload),
      new CartActions.CartRequestProductStart(data.payload)
    ])
  );

  @Effect()
  cartAddItemStart = this.actions$.pipe(
    ofType(CartActions.CART_ADD_ITEM_START),
    switchMap((data: CartActions.CartAddItemStart) => {
      const baseUrl = environment.cartUrl + '/cart';

      const newOrder: CartOrder = {
        id: null,
        productId: data.payload.id,
        quantity: 1
      };

      return this.http.post<CartOrder>(baseUrl, newOrder, {
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

  @Effect()
  cartProductStart = this.actions$.pipe(
    ofType(CartActions.CART_REQUEST_PRODUCT_START),
    mergeMap((data: CartActions.CartRequestProductStart) => {
      const baseUrl = environment.catalogUrl + '/catalog/product';
      const orderIds = data.cartOrders.map(o => o.productId);
      return this.http.post(baseUrl, orderIds).pipe(
        map((resData: any) => {
          console.log(resData);
          return new CartActions.CartRequestProductSuccess(resData);
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in CartProductStart occurred!';
          return of(new CartActions.CartRequestProductFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  cartChangeItemStart = this.actions$.pipe(
    ofType(CartActions.CART_CHANGE_ITEM_START),
    switchMap((data: CartActions.CartChangeItemStart) => {
      const baseUrl = environment.cartUrl + '/cart';
      return this.http.post<CartOrder>(baseUrl, data.payload, {
        params: {
          sessionId: localStorage.getItem('sessionId')
        }
      }).pipe(
        map((resData: any) => {
          console.log(resData);
          return new CartActions.CartChangeItemSuccess(resData);
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in CartChangeItemStart occurred!';
          return of(new CartActions.CartChangeItemFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  cartDeleteItemStart = this.actions$.pipe(
    ofType(CartActions.CART_DELETE_ITEM_START),
    switchMap((data: CartActions.CartDeleteItemStart) => {
      const baseUrl = environment.cartUrl + '/cart/' + data.payload.id;
      return this.http.delete(baseUrl, {params: {
        sessionId: localStorage.getItem('sessionId')
      }}).pipe(
        map((resData: any) => {
          return (resData === true) ? new CartActions.CartDeleteItemSuccess(data.payload)
            : new CartActions.CartDeleteItemFailure('Failure while deleting item');
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in CartDeleteItemStart occurred!';
          return of(new CartActions.CartDeleteItemFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  cartDeleteAllItemsStart = this.actions$.pipe(
    ofType(CartActions.CART_DELETE_ALL_ITEMS_START),
    switchMap((data: CartActions.CartDeleteAllItemStart) => {
      const baseUrl = environment.cartUrl + '/cart';
      return this.http.delete(baseUrl, {params: {
          sessionId: localStorage.getItem('sessionId')
        }}).pipe(
        map((resData: any) => {
          return (resData === true) ? new CartActions.CartDeleteAllItemSuccess()
            : new CartActions.CartDeleteAllItemFailure('Failure while deleting all items');
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in cartDeleteAllItemsStart occurred!';
          return of(new CartActions.CartDeleteItemFailure(errorRes));
        })
      );
    })
  );
}
