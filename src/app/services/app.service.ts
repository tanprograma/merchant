import { Injectable, signal, WritableSignal } from '@angular/core';
import { Inventory, Purchase, Sale, User } from '../interfaces';
import { HttpService } from './http.service';
import { Payload } from '../interfaces';
interface Store {
  user: User | null;
  sales: { product: string; quantity: number; price: number }[];
  purchases: { product: string; quantity: number; price: number }[];
  inventories: Inventory[];
  outlet: { store: string; id?: string } | null;
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
  appStore = signal<Store>({
    user: null,
    sales: [],
    purchases: [],
    inventories: [],
    outlet: { store: 'sumbawanga' },
  });
  loading = signal(false);
  inventories = signal<Inventory[]>([]);
  sales: WritableSignal<Sale[]> = signal<Sale[]>([]);
  purchases = signal<Purchase[]>([]);
  // get all Inventory
  toggleLoading() {
    if (this.loading()) {
      this.loading.set(false);
      return;
    } else {
      this.loading.set(true);
    }
  }
  getInventory(url: string) {
    this.toggleLoading();
    this.http.getResource<Inventory[]>(url).subscribe((r) => {
      console.log(r.result);
      this.inventories.set(r.result);
      this.toggleLoading();
    });
  }
  // get all purchases
  getPurchases(url: string) {
    this.toggleLoading();
    this.http.getResource<Purchase[]>(url).subscribe((r) => {
      console.log(r.result);
      this.purchases.set(r.result);
      this.toggleLoading();
    });
  }
  // get all sales
  getSales(url: string) {
    this.toggleLoading();
    this.http.getResource<Sale[]>(url).subscribe((r) => {
      console.log(r.result);
      this.sales.set(r.result);
      this.toggleLoading();
    });
  }
  // create sale
  postSales(url: string, payload: Payload<Sale[]>) {
    return this.http.postResource<Sale[], Sale[]>(url, payload);
  }
  postSale(url: string, payload: Payload<Sale>) {
    return this.http.postResource<Sale, Sale>(url, payload);
  }
  // create purchase
  postPurchase(url: string, payload: Payload<Purchase>) {
    return this.http.postResource<Purchase, Purchase>(url, payload);
  }
  postPurchases(url: string, payload: Payload<Purchase[]>) {
    return this.http.postResource<Purchase[], Purchase[]>(url, payload);
  }
  // create sale
  postProduct(url: string, payload: Payload<Inventory>) {
    return this.http.postResource<Inventory, Inventory>(url, payload);
  }
  postProducts(url: string, payload: Payload<Inventory[]>) {
    return this.http.postResource<Inventory[], Inventory[]>(url, payload);
  }
  constructor(private http: HttpService) {}
}
