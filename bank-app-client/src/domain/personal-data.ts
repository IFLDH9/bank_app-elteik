import {Role} from './role';
import {Account} from './account';

export interface PersonalData {
  id: number;
	name: string;
	password: string;
	dateOfBirth: string;
	idCardNumber: string;
	role: Role;
	accounts: Account[];
}
