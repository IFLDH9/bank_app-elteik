import { Component, OnInit } from '@angular/core';
import {BankCardService} from "../bank-card.service";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(
    public transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getTransactions();
  }
}
