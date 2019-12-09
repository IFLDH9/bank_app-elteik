import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNumberFilterComponent } from './account-number-filter.component';

describe('AccountNumberFilterComponent', () => {
  let component: AccountNumberFilterComponent;
  let fixture: ComponentFixture<AccountNumberFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNumberFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
