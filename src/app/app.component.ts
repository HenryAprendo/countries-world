import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private darkModeService:DarkModeService = inject(DarkModeService);

  private darkModeActual:string = '';

  ngOnInit(): void {
    this.darkModeService.selectedMode
      .subscribe(value => {
        this.darkModeActual = value;
        document.documentElement.className = value;
      });
  }

  toogleMode(){
    this.darkModeActual === 'dark'
      ? this.darkModeService.setMode('light')
      : this.darkModeService.setMode('dark');
  }

}




















