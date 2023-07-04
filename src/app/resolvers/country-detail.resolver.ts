import { ResolveFn, ActivatedRouteSnapshot, Router} from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CountryService } from './../services/country.service';
import { Country } from './../model/country.model';
import { inject } from '@angular/core';


export const countryDetailResolver: ResolveFn<Country> = (route:ActivatedRouteSnapshot, state) => {

  const router:Router = inject(Router);
  const countryService:CountryService = inject(CountryService);

  const name = route.paramMap.get('name')!;

  return countryService.getOne(name).pipe(
    mergeMap(country => {
      if(country){
        return of(country);
      }
      else {
        router.navigate(['countries']);
        return EMPTY;
      }
    })
  )

};
