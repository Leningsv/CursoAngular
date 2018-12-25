import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectComponent } from './components/protect/protect.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'price', component: PriceComponent },
    {
        path: 'protect',
        component: ProtectComponent,
        canActivate: [ AuthGuardService ]
     },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
