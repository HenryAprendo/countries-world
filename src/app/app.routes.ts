import { Routes } from '@angular/router';
import {countryDetailResolver} from './resolvers/country-detail.resolver';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadComponent: () => import('./components/countries/countries.component').then(m => m.CountriesComponent),
  },
  {
    path: 'detail/:name',
    loadComponent: () => import('./components/detail/detail.component').then(m => m.DetailComponent),
    // resolve: {
    //   country: countryDetailResolver
    // },
  }
];
