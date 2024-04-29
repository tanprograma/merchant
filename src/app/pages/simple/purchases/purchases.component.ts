import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../../services/app.service';
import { environment } from '../../../../environments/environment.development';
import { Inventory, Payload, Purchase } from '../../../interfaces';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss',
})
export class PurchasesComponent {
  api = environment.api;
  purchaseItem = this.formBuilder.group({
    product: ['', Validators.required],
    quantity: [0, Validators.required],
    price: [0, Validators.required],
  });
  purchases: Inventory[] = [];
  products = this.appService.inventories;
  // get all products
  getProducts() {
    this.appService.getInventory(`${this.api}/inventories`);
  }
  // adds sales to database
  submitPurchase() {
    const payload: Payload<Purchase> = {
      payload: { items: this.purchases },
    };
    console.log(payload);
    this.appService.toggleLoading();
    this.appService
      .postPurchase(`${this.api}/purchases/create`, payload)
      .subscribe((r) => {
        this.purchases = [];
        this.appService.toggleLoading();
      });
  }
  // adds sale to form
  addPurchase() {
    if (this.purchaseItem.status == 'INVALID') return;
    const purchase = {
      product: this.purchaseItem.value.product ?? '',
      quantity: this.purchaseItem.value.quantity ?? 0,
      price: this.purchaseItem.value.price ?? 1,
    };
    this.purchases.push(purchase);
    this.purchaseItem.patchValue({
      product: '',
      quantity: 0,
      price: 0,
    });
  }
  // computes total purchases
  getTotalPurchases() {
    return this.purchases.reduce((aggregate: number, current: Inventory) => {
      aggregate += current.price * current.quantity;
      return aggregate;
    }, 0);
  }
  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
}
