import { Component, OnInit } from '@angular/core';
import {Card} from "../../domain/card";
import {BankCardService} from "../bank-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  accountID: number;
  cardID: number;

  constructor(private bankCardService : BankCardService,
              private router : Router) { }

  ngOnInit() {
  }

  async submitConnection(cardID: number,accountID: number){
    await this.bankCardService.ConnectCardWithAccount(cardID,accountID);
    this.router.navigate(['/']);
  }
}
