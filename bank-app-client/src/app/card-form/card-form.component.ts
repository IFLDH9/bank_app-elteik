import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../domain/card";
import {CardType} from "../../domain/card-type";
import {FormGroup} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],

})
export class CardFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() card: Card;
  @Output() cardSubmit: EventEmitter<Card> = new EventEmitter();

  types = [{
    label: 'Visa',
    value: 'VISA',
  }, {
    label: 'Mastercard',
    value: 'MASTERCARD',
  }, {
    label: 'Maestro',
    value: 'MAESTRO',
  }]

  constructor() { }

  ngOnInit() {}

  async submitCard(form: FormGroup) {
    if (!form.valid) {
      console.log('hiba');
      return;
    }
    this.cardSubmit.emit(form.getRawValue() as Card);
  }
}

