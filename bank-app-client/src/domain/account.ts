import {Card} from './card';
import {Transaction} from './transaction';
import {PersonalData} from './personalData';

export interface Account {
	id: number;
	createdAt: string;
	accountNumber: number;
	balance: number;
	cards: Card[];
	owners: PersonalData[];
	incomingTransactions: Transaction[];
	outgoingTransactions: Transaction[];
	
	
}
