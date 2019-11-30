import {CardType} from './cardType';
import {Account} from './account';

export interface Card {
	id: number;
	ownerName: string;
	expirationDate: string;
	cardType: CardType[];
	cardNumber: string;
	account: Account[];
}
