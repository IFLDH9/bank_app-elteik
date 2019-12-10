import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../domain/card";
import {FormGroup} from "@angular/forms";
import {PersonalData} from "../../domain/personal-data";

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() personalData: PersonalData;
  @Output() personalDataSubmit: EventEmitter<PersonalData> = new EventEmitter();

  types = [{
    label: 'User',
    value: 'ROLE_USER',
  }, {
    label: 'Admin',
    value: 'ROLE_ADMIN',
  }]

  constructor() { }

  ngOnInit() {}

  async submitPersonalData(form: FormGroup) {
    if (!form.valid) {
      console.log('hiba');
      return;
    }
    this.personalDataSubmit.emit(form.getRawValue() as PersonalData);
  }

}
