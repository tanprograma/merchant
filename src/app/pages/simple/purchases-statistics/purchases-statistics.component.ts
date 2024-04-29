import { Component, computed, Signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../services/app.service';
import { Purchase, PurchaseItem } from '../../../interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-purchases-statistics',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './purchases-statistics.component.html',
  styleUrl: './purchases-statistics.component.scss',
})
export class PurchasesStatisticsComponent {
  api = environment.api;

  purchases: Signal<PurchaseItem[]> = computed(() => {
    return this.appService
      .purchases()
      .reduce((aggregate: PurchaseItem[], current: Purchase) => {
        const mappedItems = current.items.map((i) => {
          return { ...i, date: new Date(current?.date || '') };
        });
        aggregate.push(...mappedItems);
        return aggregate;
      }, []);
  });
  totalPurchases: Signal<number> = computed(() => {
    return this.purchases().reduce(
      (aggregate: number, current: PurchaseItem) => {
        aggregate += current.price * current.quantity;
        return aggregate;
      },
      0
    );
  });

  getPurchases() {
    console.log('getting sales');
    this.appService.getPurchases(`${this.api}/purchases`);
  }
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.getPurchases();
  }
  refresh() {
    this.getPurchases();
  }
}
