import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardNumberFilterComponent } from './id-card-number-filter.component';

describe('IdCardNumberFilterComponent', () => {
  let component: IdCardNumberFilterComponent;
  let fixture: ComponentFixture<IdCardNumberFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardNumberFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardNumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
