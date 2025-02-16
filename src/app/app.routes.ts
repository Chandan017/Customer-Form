import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const routes: Routes = [
    { path: '', component: CustomerListComponent, pathMatch: 'full' },
    { path: 'customer-details', component: CustomerDetailsComponent }
];
