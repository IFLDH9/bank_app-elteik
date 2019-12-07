import { Component, OnInit } from '@angular/core';
import { PersonalData } from 'src/domain/personal-data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import {Role} from "../../domain/role";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	// signin: FormGroup = new FormGroup({
    // email: new FormControl('', [Validators.email, Validators.required ]),
    // password: new FormControl('', [Validators.required, Validators.min(3) ])
	// });s
	// hide = true;
	// get emailInput() { return this.signin.get('email'); }
	// get passwordInput() { return this.signin.get('password'); }

	user : PersonalData = {
	  id: null,
		name: '',
		password: '',
		dateOfBirth: '',
		idCardNumber: '',
		role: Role.Guest,
		accounts: null,
	};

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	onSubmit(form: FormGroup){
		const user = form.value as PersonalData;
		console.log(user.name);
		this.authService.login(user.name, user.password);
	}

}
