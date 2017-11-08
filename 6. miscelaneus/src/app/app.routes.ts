import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: [
            { path: 'newUser', component: NewUserComponent },
            { path: 'editUser', component: EditUserComponent },
            { path: 'detailUser', component: DetailUserComponent }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
