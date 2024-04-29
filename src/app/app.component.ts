import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'probonoliquors';

  logo = 'PROBONO LIQUORS LLC';

  constructor() {}
}
