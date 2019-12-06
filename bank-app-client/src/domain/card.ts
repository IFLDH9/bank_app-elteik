import {CardType} from './card-type';
import {Account} from './account';

export interface Card {
	id: number;
	ownerName: string;
	expirationDate: string;
	cardType: CardType[];
	cardNumber: string;
	account: Account[];
}
