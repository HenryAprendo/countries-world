import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './../../services/country.service';
import { Country } from './../../model/country.model';
import { CountryComponent } from './../country/country.component';
import { CodeService } from './../../services/code.service';
import { FormsModule } from '@angular/forms';
import { regions, Region } from './../../data/region';
import { myInsertRemove } from './../../animations/insert-remove';


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
  animations: [myInsertRemove]
})
export class CountriesComponent implements OnInit {

  private codeService:CodeService = inject(CodeService);

  private countryService:CountryService = inject(CountryService);

  private countries:Country[]  = [];

  countriesFiltered:WritableSignal<Country[]> = signal([]);

  regionList = regions.slice();

  menuOptionRegion = false;

  selectedId = 0;

  ngOnInit(): void {
    this.countryService.getAll().subscribe({
      next: data => {
        this.countries = data;
        this.countriesFiltered.set(data.slice());
        data.forEach(c => this.codeService.setKeyValue(c.cca3, c.name.common));
      },
      error: (err:Error) => {
        console.log(err.message);
      }
    });
  }

  filtering(text:string){
    let dataFiltered = this.countries.filter(country => country.name.common
      .toLowerCase()
      .startsWith(text.toLowerCase()));

    this.countriesFiltered.set(dataFiltered);
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


}

















