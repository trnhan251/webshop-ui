import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as CheckoutActions from './checkout.actions';
import * as CartActions from '../../cart-page/store/cart.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {of} from 'rxjs';
import {Order} from '../../../shared/models/order';
import {CheckoutOrder} from '../../../shared/models/checkout-order';
import {ShippingOrder} from '../../../shared/models/shipping-order';

@Injectable()
export class CheckoutEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  checkoutStart = this.actions$.pipe(
    ofType(CheckoutActions.CHECKOUT_START),
    switchMap((data: CheckoutActions.CheckoutStart) => {
      const baseUrL = environment.checkoutUrl + '/order';
      return this.http.post(baseUrL, data.payload).pipe(
        map((resData: ShippingOrder) => {
          console.log(resData);
          return new CheckoutActions.CheckoutSuccess(resData, data.payload, data.cartOrders);
        }),
        catchError(errorRes => {
          const errorMessage = 'An error in CheckoutStart occurred!';
          return of(new CheckoutActions.CheckoutFailure(errorRes));
        })
      );
    })
  );

  @Effect()
  checkoutSuccess = this.actions$.pipe(
    ofType(CheckoutActions.CHECKOUT_SUCCESS),
    switchMap(() => {
      return of(new CartActions.CartDeleteAllItemStart());
    })
  );
}

