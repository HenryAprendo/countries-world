import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './../country/country.component';
import { CodeService } from './../../services/code.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CountryComponent],
  templateUrl: './countries.component.html',
  styles: [],
  providers: [CountryService]
})
export class CountriesComponent implements OnInit {

  private codeService:CodeService = inject(CodeService);

  private countryService:CountryService = inject(CountryService);

  countries: WritableSignal<Country[]> = signal([]);

  ngOnInit(): void {
    this.countryService.getAll().subscribe(data => {
      // console.log(data)
      this.countries.set(data);
      data.forEach(c => this.codeService.setKeyValue(c.cca3, c.name.common));
    });

  }


}

















