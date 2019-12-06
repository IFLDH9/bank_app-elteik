import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/domain/account';
import { FormGroup } from '@angular/forms';
import { BankAccountService } from '../bank-account-service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

	@Input() mode : 'create' | 'edit';
	@Input() account : Account;
	@Output() accountSubmit : EventEmitter<Account> = new EventEmitter();

	constructor() { }
	
	ngOnInit() { }

	async submitAccount(form : FormGroup){
		if(!form.valid){
			return;
		}
		this.accountSubmit.emit(form.getRawValue() as Account);
	}


}
