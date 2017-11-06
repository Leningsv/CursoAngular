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
import { Subpage1Component } from './subpage1/subpage1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    HomeComponent,
    Subpage1Component
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
