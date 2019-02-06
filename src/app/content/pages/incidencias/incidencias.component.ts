import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent implements OnInit {

  constructor(public toaster:ToastService) { }

  ngOnInit() {
  }

  send(){
    this.toaster.success('Peticion enviada','Peticion enviada con exito');
  }

}
