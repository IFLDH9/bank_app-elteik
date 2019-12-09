import { Component, OnInit } from '@angular/core';
import { Account } from 'src/domain/account';
import { BankAccountService } from '../bank-account-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-modify',
  templateUrl: './account-modify.component.html',
  styleUrls: ['./account-modify.component.css']
})
export class AccountModifyComponent implements OnInit {
  account: Account;

  constructor(
    private bankService: BankAccountService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const accountID = parseInt(
      this.route.snapshot.params.id);
    this.account = await this.bankService.getAccountById(accountID);
  }

  async submitIssue(account: Account) {
    console.log('itt vagyok :)))');
    account.id = this.account.id;
    await this.bankService.modifyAccount(account);
    this.router.navigate(['/','accounts']);
  }


}
