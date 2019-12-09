import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { IssueListComponent } from "../issue-list/issue-list.component";
import { AccountFormComponent } from '../account-form/account-form.component';
import { LandingComponent } from '../landing/landing.component';
//import { IssueDetailComponent } from '../issue-detail/issue-detail.component';
import { AccountNewComponent } from '../account-new/account-new.component';
//import { IssueEditComponent } from '../issue-edit/issue-edit.component';
import { LoginComponent } from '../login/login.component';
import { Role } from 'src/domain/role';
import { RoleGuard } from '../role-guard';
import {AccountModifyComponent} from "../account-modify/account-modify.component";
import {AccountListComponent} from "../account-list/account-list.component";
import {AccountDetailComponent} from "../account-detail/account-detail.component";


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
   {
     path: 'accounts',
     component: AccountListComponent,
     data: {
       roles: [Role.Admin],
     },
     canActivate: [RoleGuard],
   },
  {
    path: 'bank/account/create',
    component: AccountNewComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
   {
     path: 'bank/account/:id',
     component: AccountDetailComponent,
     data: {
       roles: [Role.Admin],
     },
     canActivate: [RoleGuard],
   },
   {
     path: 'bank/account/modify/:id',
     component: AccountModifyComponent,
     data: {
       roles: [Role.Admin],
     },
     canActivate: [RoleGuard],
   },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      roles: [Role.Guest],
    },
    canActivate: [RoleGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }


/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

