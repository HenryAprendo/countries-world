import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './../country/country.component';
import { CodeService } from './../../services/code.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, of, tap } from 'rxjs';


@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CountryComponent, FormsModule],
  templateUrl: './countries.component.html',
  styles: [],
  providers: [CountryService]
})
export class CountriesComponent implements OnInit {

  private codeService:CodeService = inject(CodeService);

  private countryService:CountryService = inject(CountryService);

  // countries: WritableSignal<Country[]> = signal([]);

  // countriesFiltered:Country[] = [];

  // ngOnInit(): void {
  //   this.countryService.getAll().subscribe(data => {
  //     this.countries.set(data);
  //     data.forEach(c => this.codeService.setKeyValue(c.cca3, c.name.common));

  //   });
  // }

  private countries:Country[]  = [];

  countriesFiltered:WritableSignal<Country[]> = signal([]);

  ngOnInit(): void {
    this.countryService.getAll().subscribe(data => {
      this.countries = data;
      this.countriesFiltered.set(data.slice());
      data.forEach(c => this.codeService.setKeyValue(c.cca3, c.name.common));
    });
  }

  filtering(text:string){
    let dataFiltered = this.countries.filter(country => country.name.common
      .toLowerCase()
      .startsWith(text.toLowerCase()));

    this.countriesFiltered.set(dataFiltered);
  }


}

















