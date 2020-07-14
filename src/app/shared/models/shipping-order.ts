export interface ShippingOrder {
  id: number;
  orderId: number;
  streetAddress: string;
  zipCode: number;
  city: string;
  state: string;
  country: string;
  emailAddress: string;
  totalCost: number;
  trackingNumber: string;
  shippingCost: number;
}
