import { Injectable } from '@angular/core';
import { PersonalData } from 'src/domain/personal-data';
import { Role } from 'src/domain/role';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private user: PersonalData;
	get isLoggedIn(): boolean {
    return this.user.role !== Role.Guest;
	}
	get token() {
		return btoa(`${this.user.name}:${this.user.password}`);
	}
	get role(): Role {
		return this.user.role;
	}


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
			role: Role.Guest,
			name: username,
			password: password,
			dateOfBirth: null,
			idCardNumber: null,
			accounts: null
		};
		try {
			const user = await (this.http.get('users/login').toPromise() as Promise<PersonalData>);
			this.user.name = user.name;
			this.user.role = user.role;
			this.user.dateOfBirth = user.dateOfBirth;
			this.user.idCardNumber = user.idCardNumber;
			this.user.accounts = user.accounts;
			this.router.navigate(['/']);
			
		} catch (e) {
			this.user = oldUser;
		}
	}

	logout(shouldNavigateToRoot: boolean = true) {
		this.user = {
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