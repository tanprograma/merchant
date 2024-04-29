import { Component, computed, Signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../services/app.service';
import { Sale, SaleItem } from '../../../interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sales-statistics',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './sales-statistics.component.html',
  styleUrl: './sales-statistics.component.scss',
})
export class SalesStatisticsComponent {
  api = environment.api;

  sales: Signal<SaleItem[]> = computed(() => {
    return this.appService
      .sales()
      .reduce((aggregate: SaleItem[], current: Sale) => {
        const mappedItems = current.items.map((i) => {
          return { ...i, date: new Date(current?.date || '') };
        });
        aggregate.push(...mappedItems);
        return aggregate;
      }, []);
  });
  totalSales: Signal<number> = computed(() => {
    return this.sales().reduce((aggregate: number, current: SaleItem) => {
      aggregate += current.price * current.quantity;
      return aggregate;
    }, 0);
  });

  getSales() {
    console.log('getting sales');
    this.appService.getSales(`${this.api}/sales`);
  }
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.getSales();
  }
  refresh() {
    this.getSales();
  }
}
