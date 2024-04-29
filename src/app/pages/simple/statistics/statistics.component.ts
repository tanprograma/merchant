import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { environment } from '../../../../environments/environment';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl } from '@angular/forms';
import { StatisticsNavigationComponent } from '../statistics-navigation/statistics-navigation.component';
@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [RouterLink, RouterOutlet, StatisticsNavigationComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {}
