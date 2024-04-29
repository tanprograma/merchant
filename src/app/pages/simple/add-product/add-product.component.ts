import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Inventory } from '../../../interfaces';
import { AppService } from '../../../services/app.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  api = environment.api;
  productItem = this.formBuilder.group({
    product: ['', Validators.required],
    price: [0, Validators.required],
  });
  products: Inventory[] = [];
  // adds sales to database
  submitProducts() {
    this.appService.toggleLoading();
    this.appService
      .postProducts(`${this.api}/inventories/createmany`, {
        payload: this.products,
      })
      .subscribe((r) => {
        this.products = [];
        this.appService.toggleLoading();
      });
  }
  // adds sale to form
  addProduct() {
    if (this.productItem.status == 'INVALID') return;
    const product: Inventory = {
      product: this.productItem.value.product ?? '',
      price: this.productItem.value.price ?? 1,
      quantity: 0,
    };
    this.products.push(product);
    this.productItem.patchValue({
      product: '',
      price: 0,
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {}
}
