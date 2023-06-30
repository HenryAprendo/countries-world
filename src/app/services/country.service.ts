import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './../model/country.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Native {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http:HttpClient = inject(HttpClient);

  private url = 'https://restcountries.com/v3.1/all';

  constructor() { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url).pipe(
      map( data =>

        data.map(country => {

          let listLanguages: string[] = [];
          let nativeName = '';
          let currency = '';

          if(country.currenciesObj){
            const nameCurrency:Currency = converterObjToArrayValues<Currency>(country.currenciesObj)[0];
            currency = nameCurrency.name;
          }

          if(country.name.nativeName) {
            const list = converterObjToArrayValues<Native>(country.name.nativeName);
            nativeName = list[0].common;
          }

          if(country.langObj) {
            listLanguages = converterObjToArrayValues<string>(country.langObj);
          }

          const newObj: Country = {
            ...country,
            native: nativeName,
            currency: currency,
            languages: [...listLanguages],
          }

          return { ...newObj };

        })
      )
    )
  };


}

// Utilidades
const converterObjToArrayValues = <T>(target:Object): T[] => {
  const values: Array<T> = Object.values(target);
  return values;
}


