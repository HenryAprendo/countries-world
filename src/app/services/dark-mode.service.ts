import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type DarkMode = 'dark' | 'light';

const key = 'theme';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private mode:string = '';

  private mode$ = new BehaviorSubject<string>(this.mode);

  selectedMode = this.mode$.asObservable();

  constructor() {
    this.getMode();
  }

  setMode(value:DarkMode) {
    localStorage.setItem(key,value);
    this.getMode();
  }

  private getMode(): void {
    let newMode = localStorage.getItem(key);
    if(!newMode){
      this.setMode('light');
    }
    else {
      this.mode = newMode;
    }
    this.mode$.next(this.mode);
  }

}










