import * as HomeActions from './home.actions';
import {Product} from '../../../shared/models/product';

export interface State {
  products: Product[];
  fetchHomePending: boolean;
  fetchHomeFailure: any;
}

const initialState: State = {
  products: null,
  fetchHomePending: false,
  fetchHomeFailure: null
};

export function HomeReducer(state = initialState, action: HomeActions.HomeActions) {
  switch (action.type) {
    case HomeActions.HOME_LOAD_START:
      return {
        ...state,
        fetchHomePending: true,
        fetchHomeFailure: null
      };
    case HomeActions.HOME_LOAD_SUCCESS:
      return {
        ...state,
        products: action.payload,
        fetchHomePending: false,
        fetchHomeFailure: null
      };
    case HomeActions.HOME_LOAD_FAILURE:
      return {
        ...state,
        products: null,
        fetchHomePending: false,
        fetchHomeFailure: action.payload
      };
    case HomeActions.HOME_REMOVE_PRODUCT_START:
      const newProducts = [...state.products];
      const index = newProducts.indexOf(action.payload);
      newProducts.splice(index, 1);
      return {
        ...state,
        products: newProducts
      };
    default:
      return state;
  }
}
