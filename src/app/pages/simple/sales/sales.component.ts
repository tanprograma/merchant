import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { environment } from '../../../../environments/environment.development';
import { Inventory, Payload, Sale } from '../../../interfaces';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  api = environment.api;
  saleItem = this.formBuilder.group({
    product: ['', Validators.required],
    quantity: [0, Validators.required],
  });
  sales: Inventory[] = [];
  products = this.appService.inventories;
  // get all products
  getProducts() {
    this.appService.getInventory(`${this.api}/inventories`);
  }
  // adds sales to database
  submitSales() {
    const payload: Payload<Sale> = { payload: { items: this.sales } };
    // console.log(payload);
    this.appService.toggleLoading();
    this.appService
      .postSale(`${this.api}/sales/create`, payload)
      .subscribe((r) => {
        this.sales = [];
        this.appService.toggleLoading();
      });
  }
  // adds sale to form
  addSale() {
    if (this.saleItem.status == 'INVALID') return;
    const sale = {
      product: this.saleItem.value.product ?? '',
      quantity: this.saleItem.value.quantity ?? 0,
      price:
        this.products().find((i) => this.saleItem.value.product == i.product)
          ?.price || 1,
    };
    this.sales.push(sale);
    this.saleItem.patchValue({
      product: '',
      quantity: 0,
    });
  }
  getTotalSales() {
    return this.sales.reduce((aggregate: number, current: Inventory) => {
      aggregate += current.price * current.quantity;
      return aggregate;
    }, 0);
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private appService: AppService
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
}
