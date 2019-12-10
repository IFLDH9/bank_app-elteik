import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatIconModule} from '@angular/material/icon';
//import {MatButtonModule} from '@angular/material/button';
import { LandingComponent } from './landing/landing.component';
//import { IssueListComponent } from './issue-list/issue-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import {MatInputModule} from '@angular/material/input';
import { RoutingModule } from './routing/app-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//import { StatusFilterComponent } from './status-filter/status-filter.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { AccountNewComponent } from './account-new/account-new.component';
//import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { LoginComponent } from './login/login.component';
import { RoleDirective } from './role-directive';
import { AccountModifyComponent } from './account-modify/account-modify.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountNumberFilterComponent } from './account-number-filter/account-number-filter.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardModifyComponent } from './card-modify/card-modify.component';
import { CardNewComponent } from './card-new/card-new.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ConnectionsComponent } from './connections/connections.component';
//import { AccountNewComponent } from './account-new/account-new.component';
//import { AccountFormComponent } from './account-form/account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
//  IssueListComponent,
//  StatusFilterComponent,
//  IssueDetailComponent,
//  IssueEditComponent,
    LoginComponent,
    RoleDirective,
    AccountNewComponent,
    AccountFormComponent,
    AccountModifyComponent,
    AccountListComponent,
    AccountNumberFilterComponent,
    AccountDetailComponent,
    CardDetailComponent,
    CardFormComponent,
    CardListComponent,
    CardModifyComponent,
    CardNewComponent,
    ConnectionsComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RoutingModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/



