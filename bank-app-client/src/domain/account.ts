import {Card} from './card';
import {Transaction} from './transaction';
import {PersonalData} from './personal-data';

export interface Account {
	id: number;
	createdAt: string;
	accountNumber: string;
	balance: number;
	cards: Card[];
	owners: PersonalData[];
	incomingTransactions: Transaction[];
	outgoingTransactions: Transaction[];


}
