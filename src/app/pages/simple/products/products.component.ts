import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../services/app.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  api = environment.api;

  inventories = this.appService.inventories;
  getInventory() {
    console.log('getting inventory');
    this.appService.getInventory(`${this.api}/inventories`);
  }
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.getInventory();
  }
  refresh() {
    this.getInventory();
  }
}
