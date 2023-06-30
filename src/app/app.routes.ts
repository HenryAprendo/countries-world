import { Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadComponent: () => import('./components/countries/countries.component').then(m => m.CountriesComponent)
  }
];
