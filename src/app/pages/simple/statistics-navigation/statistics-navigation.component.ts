import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'statistics-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './statistics-navigation.component.html',
  styleUrl: './statistics-navigation.component.scss',
})
export class StatisticsNavigationComponent {}
