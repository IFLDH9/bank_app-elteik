import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/domain/account';


@Injectable({
		providedIn: 'root'
})

export class BankAccountService {
	accounts: Account[] = [];
	filteredAccounts: Account[] = this.accounts;

	constructor(
	private http: HttpClient
	){}

	async getAccounts(){
		const accounts = await (this.http.get('bank/accounts/getAll')
		.toPromise() as Promise<any[]>);
		this.filteredAccounts = this.accounts = accounts.map(this.createAccountModel);
	}

	async getAccountById(accountId: number): Promise<Account>{
		const account = await (this.http.get(`bank/accounts/get/byID/${accountId}`)
		.toPromise() as Promise<any>);
		return this.createAccountModel(account);
	}

	async getAccountByOwnerName(ownerName: string){
		const accounts = await (this.http.get(`bank/accounts/get/byOwner/${ownerName}`)
		.toPromise() as Promise<any[]>);
		this.filteredAccounts = this.accounts = accounts.map(this.createAccountModel);
	}

	async getAccountByDate(date: string){
		const accounts = await (this.http.get(`bank/accounts/get/byDate/${date}`)
		.toPromise() as Promise<any[]>);
		this.filteredAccounts = this.accounts = accounts.map(this.createAccountModel);
	}

	async createAccount (account: Account): Promise<any>{
	  console.log(account);
		await this.http.post('bank/accounts/create', account).toPromise();
	}

	async modifyAccount (account: Account): Promise<any>{
	await this.http.patch(`bank/accounts/modify/${account.id}`, account).toPromise();
	}

	async deleteAccount (account: Account): Promise<any>{
	await this.http.delete(`bank/accounts/delete/${account.id}`).toPromise();
	this.getAccounts();
	}

	async addPersonsToAccount (accountId: number, personIds : number[]): Promise<any>{
	await this.http.patch(`bank/accounts/${accountId}/addPersons`, personIds).toPromise();
	}

	private createAccountModel(account: any): Account{
		return {
			...account,
			createdAt: new Date(account.createdAt)
		} as Account;
	}

	filterChange(filterValue: string) {
		if(typeof filterValue === 'string'){
			if(filterValue === ''){
				this.filteredAccounts = this.accounts;
			}else{
				this.filteredAccounts = this.accounts.filter(account => {
					return account.accountNumber.includes(filterValue);
				});
			}
		}
	}
}













