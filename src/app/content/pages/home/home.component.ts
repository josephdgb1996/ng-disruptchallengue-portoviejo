import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: any[] = [
    {
      "name": "Incidencias",
      "value": 500
    },
    {
      "name": "Proyectos",
      "value": 600
    },
    {
      "name": "Tareas",
      "value": 800
    }
  ];


  view: any[] = [600, 300];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor(private _router:Router) {
    // this._router.navigate(['/'])
  }






}
