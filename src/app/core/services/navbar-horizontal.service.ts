import { Injectable } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class NavbarHorizontalService {
  public menu = [];
  constructor() {
    this.menu = [
      {title:'Inicio',url:'/home'},
      {title:'Quienes Somos?',url:'/url'},
      {title:'Comunidad',url:'/url'},
      {title:'Informacion',url:'/url'},
      {title:'Noticias',url:'/url'},
      {title:'Incidencias',url:'/incidencias'},
    ]
   }

}
