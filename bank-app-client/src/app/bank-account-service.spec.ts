import { TestBed } from '@angular/core/testing';
import { BankAccountService } from './bank-account-service';

describe('BankAccountService', () => {
	beforeEach(() => TestBed.comfigureTestingModule({}));
	it('should create an instance', () => {
		const service: BankAccountService = TestBed.get(BankAccountService);
		expect(service).toBeTruthy();
	});
});
