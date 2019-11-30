import { TestBed, async, inject } from '@angular/core/testing';
import { RoleGuard } from './role-guard';

describe('RoleGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [RoleGuard]
		});
	});
	it('should create an instance',([RoleGuard], (guard: RoleGuard) => {
		expect(new RoleGuard()).toBeTruthy();
	});
});
