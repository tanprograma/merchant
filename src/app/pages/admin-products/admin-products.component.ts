import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {
products=[
  {name:'2 by 6',price:1000,},
  {name:'2 by 6',price:1000,},
  {name:'2 by 6',price:1000,},
  {name:'2 by 6',price:1000,},
  {name:'2 by 6',price:1000,}
]
}
