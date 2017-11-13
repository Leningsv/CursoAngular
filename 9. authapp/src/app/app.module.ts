import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routing';

// Servicios
import { AuthService } from './services/auth.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectComponent } from './components/protect/protect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PriceComponent,
    ProtectComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
