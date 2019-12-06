import {Role} from './role';
import {Account} from './account';

export interface PersonalData {
	name: string;
	password: string;
	dateOfBirth: string;
	idCardNumber: string;
	role: Role;
	accounts: Account[];
}
