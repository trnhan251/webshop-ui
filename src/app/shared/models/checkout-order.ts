import {CartOrder} from './cart-order';

export interface CheckoutOrder {
  creditCardNumber: string;
  creditCardMonth: string;
  creditCardYear: number;
  creditCardCvv: number;
  streetAddress: string;
  zipCode: number;
  city: string;
  state: string;
  country: string;
  sessionId: string;
  emailAddress: string;
  orderItemList: CartOrder[];
}
