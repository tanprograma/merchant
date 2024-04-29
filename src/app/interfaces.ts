export interface Response<T> {
  result: T;
}
export interface Payload<T> {
  payload: T;
}
export interface User {
  username: string;
  password?: string;
}
export interface Inventory {
  product: String;
  price: number;
  quantity: number;
  _id?: string;
  sales?: string[];
  purchases?: string[];
}
export interface SaleItem {
  product: String;
  price: number;
  quantity: number;
  date: Date;
}
export interface PurchaseItem {
  product: String;
  price: number;
  quantity: number;
  date: Date;
}
export interface Sale {
  date?: string;
  items: Inventory[];

  _id?: string;
}
export interface Purchase {
  date?: string;
  items: Inventory[];

  _id?: string;
}
