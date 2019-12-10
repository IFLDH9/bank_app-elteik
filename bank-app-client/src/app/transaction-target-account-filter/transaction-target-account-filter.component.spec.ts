import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTargetAccountFilterComponent } from './transaction-target-account-filter.component';

describe('TransactionTargetAccountFilterComponent', () => {
  let component: TransactionTargetAccountFilterComponent;
  let fixture: ComponentFixture<TransactionTargetAccountFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTargetAccountFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTargetAccountFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
