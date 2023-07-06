import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './services/dark-mode.service';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  private darkModeService:DarkModeService = inject(DarkModeService);
  private render:Renderer2 = inject(Renderer2);

  private darkModeActual:string = '';

  ngOnInit(): void {
    this.applyModeSelected();
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




















