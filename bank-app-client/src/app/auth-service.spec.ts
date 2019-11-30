import { TestBed } from './@angular/core/testing';
import { AuthService } from './auth-service';

describe('AuthService', () => {
	beforeEach(()=> TestBed.configureTestingModul({}));
	
  it('should create an instance', () => {
	  const service AuthService = TestBed.get(AuthService);
    expect(new AuthService()).toBeTruthy();
  });
});
