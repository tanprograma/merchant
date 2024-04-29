import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-normal-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './normal-link.component.html',
  styleUrl: './normal-link.component.scss'
})
export class NormalLinkComponent {
@Input() link!:{name:'create',url:'/create'}
}
