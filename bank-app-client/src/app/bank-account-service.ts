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
		const accounts = await (this.http.get('bank/accounts/getAll'))
		.toPromise() as Promise<any[]>);
		this-filteredAccounts = this.accounts = accounts.map(this.createAccountModel);
	}

	async getAccountById(accountId: number): Promise<Account>{
		const account = await (this.http.get(`bank/accounts/get/byId/${accountId}`)
		.toPromise() as Promise<any>);
		return this.createAccountModel(account);
	}
	
	async getAccountByOwnerName(ownerName: string){
		const accounts = await (this.http.get(`bank/accounts/get/byOwner/${ownerName}`)
		.toPromise() as Promise<any[]>);		
		this-filteredAccounts = this.accounts = accounts.map(this.createAccountModel);
	}
	
	async getAccountByDate(date: string){
		const accounts = await (this.http.get(`bank/accounts/get/byDate/${date}`)
		.toPromise() as Promise<any[]>);	
		this-filteredAccounts = this.accounts = accounts.map(this.createAccountModel);
	}

	async createAccount (account: Account): Promise<any>{
		await this.http.post('bank/account/create', account).toPromise();
	}
	
	async modifyAccount (account: Account): Promise<any>{
	await this.http.patch(`bank/account/modify/${account.id}`, account).toPromise();
	}

	async deleteAccount (account: Account): Promise<any>{
	await this.http.delete(`bank/account/delete/${account.id}`, account).toPromise();
	}
	
	async addPersonsToAccount (accountId: number, personIds : number[]): Promise<any>{
	await this.http.patch(`bank/account/${accountId}/addPersons`, personIds).toPromise();
	}

	/*	
	filterChange(filterValue: string) {
		if(typeOfFilterValue === 'string'){
			if(filterValue === ''){
				this.filteredAccounts = this.accounts;
			}else{
				this.filteredAccounts = this.accounts.filter(account => {
					return account.status === filterValue;
				});
			}
		}
	}
	*/
	
	
	
}













