import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../domain/card";
import {BankCardService} from "../bank-card.service";

@Component({
  selector: 'app-card-modify',
  templateUrl: './card-modify.component.html',
  styleUrls: ['./card-modify.component.css']
})
export class CardModifyComponent implements OnInit {

  card: Card;

  constructor(
    private bankCardService: BankCardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const cardID = parseInt(
      this.route.snapshot.params.id);
    this.card = await this.bankCardService.getCardByID(cardID);
  }

  async submitIssue(card: Card) {
    card.id = this.card.id;
    await this.bankCardService.modifyCard(card);
    this.router.navigate(['/','cards']);
  }

}
