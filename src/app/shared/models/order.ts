export interface Order {
  id: number;
  sessionId: string;
  emailAddress: string;
  totalCost: number;
  deliveryInfoId: number;
  creditCardId: number;
  listOrderItemIds: number[];
}
