import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { ToastrModule } from 'ngx-toastr';


const ROUTES: Routes = [
    {
        path:'',
        component:DashboardComponent,
        children:[
            {path:'home',component:HomeComponent,data:{title:'Inicio'}},
            {path:'incidencias',component:IncidenciasComponent,data:{title:'Incidencias'}},
            {path:'',pathMatch:'full',redirectTo:'/home'}
        ]
    }
];

@NgModule({
  imports: [
      LayoutModule,
      RouterModule.forChild(ROUTES),
      BrowserAnimationsModule,
      NgxChartsModule,
      ToastrModule.forRoot()

    ],
  exports: [RouterModule],
  declarations:[
      DashboardComponent,
      HomeComponent,
      LoginComponent,
      IncidenciasComponent
  ]
})
export class DashboardModule { }




