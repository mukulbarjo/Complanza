// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthLayout } from './layout/auth-layout/auth-layout/auth-layout';
import { Login } from './layout/login/login/login';
import { RegisterComponent } from './layout/register/register/register';
import { AuthGuard } from './core/auth-guard';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard/admin-dashboard';
import { UserDashboard } from './user/user-dashboard/user-dashboard/user-dashboard';


export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'register', component: RegisterComponent }
    ]
  },
   {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminDashboard
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserDashboard
  },
  { path: '**', redirectTo: 'login' }
];
