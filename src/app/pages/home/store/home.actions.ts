import { Action } from '@ngrx/store';
import {Product} from '../../../shared/models/product';

export const HOME_LOAD_START = 'HOME_LOAD_START';
export const HOME_LOAD_SUCCESS = 'HOME_LOAD_SUCCESS';
export const HOME_LOAD_FAILURE = 'HOME_LOAD_FAILURE';


export class HomeLoadStart implements Action {
  readonly type = HOME_LOAD_START;
  constructor() {}
}

export class HomeLoadSuccess implements Action {
  readonly type = HOME_LOAD_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class HomeLoadFailure implements Action {
  readonly type = HOME_LOAD_FAILURE;
  constructor(public payload: string) {}
}

export type HomeActions = HomeLoadStart
  | HomeLoadSuccess
  | HomeLoadFailure;
