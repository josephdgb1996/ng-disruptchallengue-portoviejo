import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/pages/login/login.component';

const ROUTES: Routes = [
  {path:'login',component:LoginComponent},
  {path:'**',component:LoginComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash:true});  
