import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankCardService} from "../bank-card.service";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-source-account-filter',
  templateUrl: './transaction-source-account-filter.component.html',
  styleUrls: ['./transaction-source-account-filter.component.css']
})
export class TransactionSourceAccountFilterComponent implements OnInit {

  @Input() statusFilter: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.transactionService.filterChange(e);
    this.filterChange.emit(e);
  }

}
