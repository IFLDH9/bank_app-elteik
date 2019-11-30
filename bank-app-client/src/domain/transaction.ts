import {Account} from './account';

export interface Transaction {
	id: number;
	sourceAccountNumber: string;
	targetAccountNumber: string;
	value: number;
	dateOfTransaction: string;
	sourceAccount: Account;
	targetAccount: Account;
}
