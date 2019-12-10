import { Component, OnInit } from '@angular/core';
import {Account} from "../../domain/account";
import {BankAccountService} from "../bank-account-service";
import {Router} from "@angular/router";
import {Card} from "../../domain/card";
import {BankCardService} from "../bank-card.service";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {

  card : Card;

  constructor(private bankCardService : BankCardService,
              private router : Router) { }

  ngOnInit() {
    this.card = {
      id : null,
      cardType : null,
      cardNumber : null,
      ownerName : '',
      expirationDate : null,
      account : null,
    };
  }

  async submitCard(card : Card){
    await this.bankCardService.createCard(card);
    this.router.navigate(['/']);
  }

}
