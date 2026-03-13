import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/register/register').then(m => m.Register)
  },
  {
    path: 'admin/login',
    loadComponent: () => import('./pages/admin-login/admin-login').then(m => m.AdminLogin)
  },
  {
    path: 'admin/dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
