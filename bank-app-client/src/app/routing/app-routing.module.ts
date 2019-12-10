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
import {CardListComponent} from "../card-list/card-list.component";
import {CardNewComponent} from "../card-new/card-new.component";
import {CardDetailComponent} from "../card-detail/card-detail.component";
import {CardModifyComponent} from "../card-modify/card-modify.component";
import {ConnectionsComponent} from "../connections/connections.component";
import {TransactionListComponent} from "../transaction-list/transaction-list.component";
import {TransactionFormComponent} from "../transaction-form/transaction-form.component";
import {TransactionNewComponent} from "../transaction-new/transaction-new.component";
import {PersonalListComponent} from "../personal-list/personal-list.component";
import {PersonalNewComponent} from "../personal-new/personal-new.component";
import {PersonalDetailComponent} from "../personal-detail/personal-detail.component";
import {PersonalModifyComponent} from "../personal-modify/personal-modify.component";


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
    path: 'cards',
    component: CardListComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/cards/create',
    component: CardNewComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/cards/connect',
    component: ConnectionsComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/cards/:id',
    component: CardDetailComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/cards/modify/:id',
    component: CardModifyComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/transactions/create',
    component: TransactionNewComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },


  {
    path: 'persons',
    component: PersonalListComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/persons/create',
    component: PersonalNewComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },

  {
    path: 'bank/persons/:id',
    component: PersonalDetailComponent,
    data: {
      roles: [Role.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'bank/persons/modify/:id',
    component: PersonalModifyComponent,
    data: {
      roles: [Role.Admin],
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


