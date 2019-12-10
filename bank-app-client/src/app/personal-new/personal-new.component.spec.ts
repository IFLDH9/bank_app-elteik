import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalNewComponent } from './personal-new.component';

describe('PersonalNewComponent', () => {
  let component: PersonalNewComponent;
  let fixture: ComponentFixture<PersonalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
