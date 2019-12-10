import { Injectable } from '@angular/core';
import {Card} from "../domain/card";
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../domain/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = this.transactions;

  constructor(
    private http: HttpClient
  ){}

  async getTransactions(){
    const transactions = await (this.http.get('bank/transactions/getAll')
      .toPromise() as Promise<any[]>);
    this.filteredTransactions = this.transactions = transactions.map(this.createTransactionModel);
  }

  async getTransactionByID(transactionID: number): Promise<Transaction>{
    const transaction = await (this.http.get(`bank/transactions/get/byID/${transactionID}`)
      .toPromise() as Promise<any>);
    return this.createTransactionModel(transaction);
  }

  async createTransaction (transaction: Transaction): Promise<any>{
    console.log(transaction);
    await this.http.post('bank/transactions/create', transaction).toPromise();
  }

  async ConnectCardWithAccount (cardId: number,accountId: number): Promise<any>{
    await this.http.patch(`bank/cards/${cardId}/addAccount?accountId=${accountId}`,null).toPromise();
  }


  private createTransactionModel(transaction: any): Transaction{
    return {
      ...transaction,
    } as Transaction;
  }

  filterChange(filterValue: string) {
    if(typeof filterValue === 'string'){
      if(filterValue === ''){
        this.filteredTransactions = this.transactions;
      }else{
        this.filteredTransactions = this.transactions.filter(transaction => {
          return transaction.sourceAccountNumber.includes(filterValue);
        });
      }
    }
  }

  filter2Change(filterValue: string) {
    if(typeof filterValue === 'string'){
      if(filterValue === ''){
        this.filteredTransactions = this.transactions;
      }else{
        this.filteredTransactions = this.transactions.filter(transaction => {
          return transaction.targetAccountNumber.includes(filterValue);
        });
      }
    }
  }


}
