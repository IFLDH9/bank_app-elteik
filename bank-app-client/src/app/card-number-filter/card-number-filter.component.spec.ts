import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNumberFilterComponent } from './card-number-filter.component';

describe('CardNumberFilterComponent', () => {
  let component: CardNumberFilterComponent;
  let fixture: ComponentFixture<CardNumberFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNumberFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
