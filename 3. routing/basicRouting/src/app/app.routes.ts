import { RouterModule, Routes } from '@angular/router';

import { HomeComponent,Page1Component,Page2Component,Page3Component } from './index';

const APP_ROUTES: Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: 'page3', component: Page3Component },
    { path: '**', pathMatch: 'full',  redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:false } );