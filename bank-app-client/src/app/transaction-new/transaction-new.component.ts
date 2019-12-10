import { Component, OnInit } from '@angular/core';
import {Card} from "../../domain/card";
import {BankCardService} from "../bank-card.service";
import {Router} from "@angular/router";
import {Transaction} from "../../domain/transaction";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.css']
})
export class TransactionNewComponent implements OnInit {

  transaction : Transaction;

  constructor(private transactionService : TransactionService,
              private router : Router) { }

  ngOnInit() {
    this.transaction = {
      id : null,
      sourceAccountNumber : null,
      targetAccountNumber : null,
      value : null,
      dateOfTransaction : null,
      sourceAccount : null,
      targetAccount: null,
    };
  }

  async submitTransaction(transaction : Transaction){
    await this.transactionService.createTransaction(transaction);
    this.router.navigate(['/']);
  }

}
