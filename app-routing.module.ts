import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConnectionComponent } from './admin-connection/admin-connection.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminReadingComponent } from './admin-reading/admin-reading.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';
import { ConnectionNavbarComponent } from './connection-navbar/connection-navbar.component';
import { ConnectionUpdateComponent } from './connection-update/connection-update.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { CreateElectricityBillComponent } from './create-electricity-bill/create-electricity-bill.component';
import { CreateReadingComponent } from './create-reading/create-reading.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadingDetailsComponent } from './reading-details/reading-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateReadingComponent } from './update-reading/update-reading.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

{
  path: '',    component: NavbarComponent,    pathMatch: 'full',
},
{
  path: 'create-electricity-bill',  component: CreateElectricityBillComponent,  pathMatch: 'full',
},
{
  path: 'login',  component: LoginComponent,  pathMatch: 'full',
},

{
  path: 'customer-navbar',  component: CustomerNavbarComponent,  pathMatch: 'full',
},
{
  path: 'users',  component: UserListComponent,  pathMatch: 'full',
},
{
  path: 'details/:userId',  component: UserDetailsComponent,  pathMatch: 'full',
},

{
  path: 'user-update/:userId',  component: UpdateUserComponent,  pathMatch: 'full',
},
{
  path: 'admin-login',  component: AdminLoginComponent,  pathMatch: 'full',
},
{
  path: 'customer',  component: CustomerComponent,  pathMatch: 'full',
},
{
  path: 'customer-list',  component: CustomerListComponent,  pathMatch: 'full',
},
{
  path: 'customer-details/:customerId',  component: CustomerDetailsComponent,  pathMatch: 'full',
},
{
  path: 'customer-update/:customerId',  component: UpdateCustomerComponent,  pathMatch: 'full',
},
{
  path: 'admin-connection',  component: AdminConnectionComponent,  pathMatch: 'full',
},
{
  path: 'admin-customer',  component: AdminCustomerComponent,  pathMatch: 'full',
},
{
  path: 'admin-user',  component: AdminUserComponent,  pathMatch: 'full',
},
{
  path: 'admin-reading',  component: AdminReadingComponent,  pathMatch: 'full',
},
{
  path: 'create-connection',  component: CreateConnectionComponent,  pathMatch: 'full',
},
{
  path: 'connection-details/:connectionId',  component:ConnectionDetailsComponent,  pathMatch: 'full',
},
{
  path: 'connection-update/:connectionId',  component: ConnectionUpdateComponent,  pathMatch: 'full',
},
{
  path: 'create-reading',  component: CreateReadingComponent,  pathMatch: 'full',
},
{
  path: 'update-reading/:readingId',  component: UpdateReadingComponent,  pathMatch: 'full',
},
{
  path: 'connection-navbar',  component: ConnectionNavbarComponent,  pathMatch: 'full',
},

{
  path: 'admin-navbar',  component: AdminNavbarComponent,  pathMatch: 'full',
},
{
  path: 'reading-details/:readingId',  component: ReadingDetailsComponent,  pathMatch: 'full',
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
