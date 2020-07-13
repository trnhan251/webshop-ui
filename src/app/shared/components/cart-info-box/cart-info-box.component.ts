import {Component, NgModule, OnInit} from '@angular/core';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {MatButtonModule, MatGridListModule, MatInputModule} from '@angular/material';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cart-info-box',
  templateUrl: './cart-info-box.component.html',
  styleUrls: ['./cart-info-box.component.css']
})
export class CartInfoBoxComponent implements OnInit {
  checkoutForm;
  constructor(private formBuilder: FormBuilder) {
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
  }

  onSubmit() {
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
