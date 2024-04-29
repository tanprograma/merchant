import { Routes } from '@angular/router';
import { SimpleComponent } from '../pages/simple/simple.component';
import { AddProductComponent } from '../pages/simple/add-product/add-product.component';
import { SalesComponent } from '../pages/simple/sales/sales.component';
import { PurchasesComponent } from '../pages/simple/purchases/purchases.component';
import { StatisticsComponent } from '../pages/simple/statistics/statistics.component';
import { ProductsComponent } from '../pages/simple/products/products.component';
import { SalesStatisticsComponent } from '../pages/simple/sales-statistics/sales-statistics.component';
import { PurchasesStatisticsComponent } from '../pages/simple/purchases-statistics/purchases-statistics.component';

export const SIMPLE_ROUTES: Routes = [
  {
    path: '',
    component: SimpleComponent,
    children: [
      { path: 'add-product', component: AddProductComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'purchases', component: PurchasesComponent },
      {
        path: 'statistics',
        component: StatisticsComponent,
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'sales', component: SalesStatisticsComponent },
          { path: 'purchases', component: PurchasesStatisticsComponent },
        ],
      },
    ],
  },
];
