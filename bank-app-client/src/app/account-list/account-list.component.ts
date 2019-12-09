import { Component, OnInit } from '@angular/core';
import {BankAccountService} from "../bank-account-service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(
    public bankAccountService: BankAccountService
  ) { }

  ngOnInit() {
    this.bankAccountService.getAccounts();
  }

}
