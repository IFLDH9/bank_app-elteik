import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../domain/card";
import {FormGroup} from "@angular/forms";
import {Transaction} from "../../domain/transaction";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() transaction: Transaction;
  @Output() transactionSubmit: EventEmitter<Transaction> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  async submitTransaction(form: FormGroup) {
    if (!form.valid) {
      console.log('hiba');
      return;
    }
    this.transactionSubmit.emit(form.getRawValue() as Transaction);
  }

}
