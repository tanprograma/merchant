import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectStoreComponent } from './pages/simple/select-store/select-store.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/app/sales' },

  { path: 'login', component: LoginComponent },
  { path: 'select-store', component: SelectStoreComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./routes/admin.routes').then((mod) => mod.ADMIN_ROUTES),
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'store',
    loadChildren: () =>
      import('./routes/store.routes').then((mod) => mod.STORE_ROUTES),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./routes/simple.routes').then((mod) => mod.SIMPLE_ROUTES),
  },
];
