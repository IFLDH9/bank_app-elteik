import { Component, OnInit } from '@angular/core';
import { BankAccountService } from '../bank-account-service';
import { Account } from 'src/domain/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {

	account : Account;
  
	constructor(private bankAccountService : BankAccountService,
				private router : Router) { }
	
	ngOnInit() {
		this.account = {
				createdAt : '';
				accountNumber : null;
				balance : null;
				cards : null;
				owners : null;
				incomingTransactions : null;
				outgoingTransactions : null;
		};
  }
  
  async submitAccount(account : Account){
	await this.bankAccountService.createAccount(account);
	this.router.navigate(['/', 'accounts']);
  }

}
