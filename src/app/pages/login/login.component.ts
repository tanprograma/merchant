import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginCredentials = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  login() {
    const username = this.loginCredentials.value.password ?? '';
    this.appService.appStore.update((store) => {
      return { ...store, user: { username } };
    });
    this.router.navigate(['/app/sales']);
  }
  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}
}
