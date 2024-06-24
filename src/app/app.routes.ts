import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Pagina Login',
    loadComponent: () =>
      import('./login-signup/login-signup.component').then(
        (m) => m.LoginSignupComponent
      ),
  },
  {
    path: 'pagina-inicial',
    title: 'Pagina Inicial',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
