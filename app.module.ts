import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateElectricityBillComponent } from './create-electricity-bill/create-electricity-bill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { CustomerComponent } from './customer/customer.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatCardModule} from '@angular/material/card';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';
import { ConnectionUpdateComponent } from './connection-update/connection-update.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminConnectionComponent } from './admin-connection/admin-connection.component';
import { ConnectionNavbarComponent } from './connection-navbar/connection-navbar.component';
import { CreateReadingComponent } from './create-reading/create-reading.component';
import { AdminReadingComponent } from './admin-reading/admin-reading.component';
import { UpdateReadingComponent } from './update-reading/update-reading.component';
import { ReadingDetailsComponent } from './reading-details/reading-details.component';


@NgModule({
  
  declarations: [
    AppComponent,
    CreateElectricityBillComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CustomerComponent,
    CustomerNavbarComponent,
    UserDetailsComponent,
    UserListComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    UpdateCustomerComponent,
    ConnectionListComponent,
    CreateConnectionComponent,
    ReadingListComponent,
    AdminNavbarComponent,
    UpdateUserComponent,
    ConnectionDetailsComponent,
    ConnectionUpdateComponent,
    AdminLoginComponent,
    AdminUserComponent,
    AdminCustomerComponent,
    AdminConnectionComponent,
    ConnectionNavbarComponent,
    CreateReadingComponent,
    AdminReadingComponent,
    UpdateReadingComponent,
    ReadingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


