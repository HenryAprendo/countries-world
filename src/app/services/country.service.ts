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

  private url = 'https://restcountries.com/v3.1';

  constructor() { }

  getOne(name:string): Observable<Country> {
    return this.http.get<Country[]>(`${this.url}/name/${name}`).pipe(
      map(data => transformData(data[0]))
    )
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/all`).pipe(
      map( data => data.map(country => transformData(country)) )
    )
  };

}

const transformData = (country:Country): Country => {

  let listLanguages: string[] = [];
  let nativeName = '';
  let currency = '';

  if(country.currencies){
    const nameCurrency:Currency[] = converterObjToArrayValues<Currency>(country.currencies);
    currency = nameCurrency[0].name;
  }

  if(country.name.nativeName) {
    const list = converterObjToArrayValues<Native>(country.name.nativeName);
    nativeName = list[0].common;
  }

  if(country.languages) {
    listLanguages = converterObjToArrayValues<string>(country.languages);
  }

  const newObj: Country = {
    ...country,
    native: nativeName,
    currency: currency,
    languages: [...listLanguages],
  }

  return { ...newObj };
}

// Utilidades
const converterObjToArrayValues = <T>(target:Object): T[] => {
  const values: Array<T> = Object.values(target);
  return values;
}


