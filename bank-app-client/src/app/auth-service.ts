import { Injectable } from '@angular/core';
import { PersonalData } from 'src/domain/personal-data';
import { Role } from 'src/domain/role';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	get isLoggedIn(): boolean {
    return this.user.role !== Role.Guest;
	}
	get token() {
		return btoa(`${this.user.name}:${this.user.password}`);
	}
	get role(): Role {
		return this.user.role;
	}
  private user: PersonalData;


  constructor(
		private router: Router,
		private http: HttpClient
	) {
		this.logout(false);
	}

	hasRole(roles: Role[]): boolean {
		return roles.some(
		role => role === this.role);
	}

	async login(username: string, password: string) {

		const oldUser = this.user;
		this.user = {
		  id: null,
			role: Role.Guest,
			name: username,
			password: password,
			dateOfBirth: null,
			idCardNumber: null,
			accounts: null
		};
		try {
      console.log(this.user.name);
      console.log(this.token);
			const user = await (this.http.get('users/login').toPromise() as Promise<PersonalData>);
      console.log('thojjoeooeo');
			this.user.name = user.name;
			this.user.role = user.role;
			this.user.dateOfBirth = user.dateOfBirth;
			this.user.idCardNumber = user.idCardNumber;
			this.user.accounts = user.accounts;
			this.router.navigate(['/']);
      console.log(user.idCardNumber);
    } catch (e) {
		  console.log('xdddddddddddddddddddd');
			this.user = oldUser;
		}
	}

	logout(shouldNavigateToRoot: boolean = true) {
		this.user = {
		  id: null,
		name: 'Guest',
		password: null,
		dateOfBirth: null,
			idCardNumber: null,
			accounts: null,
		role: Role.Guest,
		};
		if (shouldNavigateToRoot) {
			this.router.navigate(['/']);
		}
	}

}
