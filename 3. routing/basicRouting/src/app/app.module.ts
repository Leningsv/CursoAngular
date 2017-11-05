import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios

//Componentes
import { HomeComponent, 
  Page1Component, 
  Page2Component, 
  Page3Component } from './index';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
