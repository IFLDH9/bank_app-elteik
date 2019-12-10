import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSourceAccountFilterComponent } from './transaction-source-account-filter.component';

describe('TransactionSourceAccountFilterComponent', () => {
  let component: TransactionSourceAccountFilterComponent;
  let fixture: ComponentFixture<TransactionSourceAccountFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSourceAccountFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSourceAccountFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
