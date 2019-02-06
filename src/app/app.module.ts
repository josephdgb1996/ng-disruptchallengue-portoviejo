import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './content/pages/dashboard.module';
import { APP_ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
