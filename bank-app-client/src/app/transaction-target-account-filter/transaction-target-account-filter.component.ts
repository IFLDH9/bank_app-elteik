import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-target-account-filter',
  templateUrl: './transaction-target-account-filter.component.html',
  styleUrls: ['./transaction-target-account-filter.component.css']
})
export class TransactionTargetAccountFilterComponent implements OnInit {

  @Input() statusFilter: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.transactionService.filter2Change(e);
    this.filterChange.emit(e);
  }

}
