import { Component, OnInit } from '@angular/core';
import {Account} from "../../domain/account";
import {Role} from "../../domain/role";
import {ActivatedRoute, Router} from "@angular/router";
import {BankAccountService} from "../bank-account-service";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  Role = Role;
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private bankAccountService: BankAccountService,
    private router: Router
  ) {}

  async ngOnInit() {
    const accountID = parseInt(this.route.snapshot.params.id);
    this.account = await this.bankAccountService.getAccountById(accountID);
  }

  editAccount() {
    this.router.navigate([
      "bank", "account","modify",this.account.id]);
  }

  deleteAccount()
  {
    this.bankAccountService.deleteAccount(this.account);
    this.router.navigate(['accounts']);
  }
}
