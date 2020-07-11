
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as HomeActions from './home.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {error} from 'util';
import {of} from 'rxjs';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  homeLoadStart = this.actions$.pipe(
    ofType(HomeActions.HOME_LOAD_START),
    mergeMap(() => {
      const baseUrL = environment.catalogUrl + '/catalog';
      return this.http.get(baseUrL).pipe(
        map((resData: any) => {
          console.log(resData);
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

