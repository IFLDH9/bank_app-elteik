import { Component, OnInit } from '@angular/core';
import {BankAccountService} from "../bank-account-service";
import {BankCardService} from "../bank-card.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(
    public bankCardService: BankCardService
  ) { }

  ngOnInit() {
    this.bankCardService.getCards();
  }

}
