import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './services/dark-mode.service';
import { Renderer2 } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { Country } from './model/country.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountryService]
})
export class AppComponent implements OnInit {

  private darkModeService:DarkModeService = inject(DarkModeService);

  private render:Renderer2 = inject(Renderer2);

  private countryService:CountryService = inject(CountryService);

  private darkModeActual:string = '';

  ngOnInit(): void {
    this.applyModeSelected();
    this.countryService.getAll().subscribe(data => {
      console.log(data)
    });
  }

  toogleMode(){
    this.darkModeActual === 'dark'
      ? this.darkModeService.setMode('light')
      : this.darkModeService.setMode('dark');
  }

  private applyModeSelected() {
    this.darkModeService.selectedMode
    .subscribe(value => {
      this.darkModeActual = value;
      let rootElement:HTMLElement = document.documentElement;

      value === 'dark'
        ? this.render.addClass(rootElement,value)
        : this.render.removeClass(rootElement,'dark');
    });
  }

}




















