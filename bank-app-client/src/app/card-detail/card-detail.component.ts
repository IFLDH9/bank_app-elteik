import { Component, OnInit } from '@angular/core';
import {Account} from "../../domain/account";
import {ActivatedRoute, Router} from "@angular/router";
import {BankAccountService} from "../bank-account-service";
import {Role} from "../../domain/role";
import {BankCardService} from "../bank-card.service";
import {Card} from "../../domain/card";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  Role = Role;
  card: Card;

  constructor(
    private route: ActivatedRoute,
    private bankCardService: BankCardService,
    private router: Router
  ) {}

  async ngOnInit() {
    const cardID = parseInt(this.route.snapshot.params.id);
    this.card = await this.bankCardService.getCardByID(cardID);
  }

  editCard() {
    this.router.navigate([
      "bank", "cards","modify",this.card.id]);
  }

  deleteCard()
  {
    this.bankCardService.deleteCard(this.card);
    this.router.navigate(['cards']);
  }

}
