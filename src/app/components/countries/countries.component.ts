import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './countries.component.html',
  styles: [],
  providers: [CountryService]
})
export class CountriesComponent implements OnInit {

  private countryService:CountryService = inject(CountryService);

  countries: WritableSignal<Country[]> = signal([]);

  ngOnInit(): void {
    this.countryService.getAll().subscribe(data => {
      console.log(data)
      this.countries.set(data);
    });
  }


}

















