import {Component, NgModule, OnInit} from '@angular/core';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {MatButtonModule, MatGridListModule, MatInputModule} from '@angular/material';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CheckoutOrder} from '../../models/checkout-order';
import * as fromApp from '../../../shared/store/app.reducer';
import {Store} from '@ngrx/store';
import {CartOrder} from '../../models/cart-order';
import * as CheckoutActions from '../../../pages/confirmation/store/checkout.actions';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart-info-box',
  templateUrl: './cart-info-box.component.html',
  styleUrls: ['./cart-info-box.component.css']
})
export class CartInfoBoxComponent implements OnInit {
  checkoutForm;
  cartOrders: CartOrder[];
  constructor(private formBuilder: FormBuilder,
              private store: Store<fromApp.AppState>,
              private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      streetAddress: '',
      zipCode: '',
      city: '',
      state: '',
      country: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: ''
    });
  }

  ngOnInit() {
    this.store.select('cart').subscribe(cartState => {
      this.cartOrders = cartState.cartOrders;
    });
  }

  onSubmit() {

    const formData = {...this.checkoutForm.value};
    const checkoutOrder: CheckoutOrder = {
      creditCardNumber: formData.cardNumber,
      creditCardMonth: formData.month,
      creditCardYear: formData.year,
      creditCardCvv: formData.cvv,
      streetAddress: formData.streetAddress,
      zipCode: formData.zipCode,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      sessionId: localStorage.getItem('sessionId'),
      emailAddress: formData.email,
      orderItemList: this.cartOrders
    };
    console.log(checkoutOrder);
    this.store.dispatch(new CheckoutActions.CheckoutStart(checkoutOrder));
    this.router.navigateByUrl('/confirmation').then(r => r);
  }
}

@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule
  ],
  declarations: [ CartInfoBoxComponent ],
  exports: [ CartInfoBoxComponent ]
})
export class CartInfoBoxModule { }
