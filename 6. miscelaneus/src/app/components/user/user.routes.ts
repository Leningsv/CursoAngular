import { RouterModule, Routes } from '@angular/router';

import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const USER_ROUTES: Routes = [
    { path: 'newUser/:param', component: NewUserComponent },
    { path: 'editUser', component: EditUserComponent },
    { path: 'detailUser', component: DetailUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'newUser'}
];
