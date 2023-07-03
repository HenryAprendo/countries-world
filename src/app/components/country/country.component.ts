import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Country } from './../../model/country.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './country.component.html',
  styles: [
  ],
})
export class CountryComponent {

  @Input({required: true}) country!: Country;

}
