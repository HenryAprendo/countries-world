import { Component, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { CountryComponent } from './../country/country.component';
import { CodeService } from './../../services/code.service';
import { FormsModule } from '@angular/forms';
import { regions, Region } from './../../data/region';
import { myInsertRemove } from './../../animations/insert-remove';
import { flyInOut } from './../../animations/fly-in-out';


@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    CommonModule,
    CountryComponent,
    FormsModule,
  ],
  templateUrl: './countries.component.html',
  styles: [],
  providers: [CountryService],
  animations: [myInsertRemove, flyInOut]
})
export class CountriesComponent implements OnInit {

  private codeService:CodeService = inject(CodeService);

  private countryService:CountryService = inject(CountryService);

  private countries:Country[]  = [];

  countriesFiltered:WritableSignal<Country[]> = signal([]);

  regionList = regions.slice();

  menuOptionRegion = false;

  selectedId = 0;

  isCountryFound = true;

  messageError = '';
  showError = false;

  ngOnInit(): void {
    this.countryService.getAll().subscribe({
      next: data => {
        this.countries = data;
        this.countriesFiltered.set(data.slice());
        data.forEach(c => this.codeService.setKeyValue(c.cca3, c.name.common));
      },
      error: (err:Error) => {
        this.messageError = err.message;
        this.onShowError();

      }
    });
  }

  filtering(text:string){
    let dataFiltered = this.countries.filter(country => country.name.common
      .toLowerCase()
      .startsWith(text.toLowerCase()));

    this.countriesFiltered.set(dataFiltered);

    this.isCountryFound = dataFiltered.length > 0 ? true : false;
  }

  filterByRegion(region:Region) {
    let dataFiltered = this.countries.filter(country => country.region.toLowerCase() === region.name.toLowerCase());
    this.countriesFiltered.set(dataFiltered);
    this.selectedId = region.id;
    this.toggleMenuOption();
  }

  toggleMenuOption(){
    this.menuOptionRegion = !this.menuOptionRegion;
  }

  onShowError(){
    this.showError = !this.showError;
  }


}

















