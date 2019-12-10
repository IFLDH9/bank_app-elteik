import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModifyComponent } from './card-modify.component';

describe('CardModifyComponent', () => {
  let component: CardModifyComponent;
  let fixture: ComponentFixture<CardModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
