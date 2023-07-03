import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private map = new Map<string,string>();

  constructor() { }

  setKeyValue(key:string,value:string){
    this.map.set(key,value);
  }

  getValue(key:string){
    return this.map.get(key);
  }

}
