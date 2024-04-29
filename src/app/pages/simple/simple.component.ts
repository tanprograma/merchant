import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss',
})
export class SimpleComponent {
  outlet = this.appService.appStore().outlet;
  loading = this.appService.loading;

  constructor(private appService: AppService, private route: ActivatedRoute) {}
}
