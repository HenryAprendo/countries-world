import { Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadComponent: () => import('./components/countries/countries.component').then(m => m.CountriesComponent)
  },
  {
    path: 'detail/:name',
    loadComponent: () => import('./components/detail/detail.component').then(m => m.DetailComponent)
  }
];
