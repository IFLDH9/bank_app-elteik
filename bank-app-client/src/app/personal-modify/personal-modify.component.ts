import { Component, OnInit } from '@angular/core';
import {Card} from "../../domain/card";
import {BankCardService} from "../bank-card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonalData} from "../../domain/personal-data";
import {PersonalService} from "../personal.service";

@Component({
  selector: 'app-personal-modify',
  templateUrl: './personal-modify.component.html',
  styleUrls: ['./personal-modify.component.css']
})
export class PersonalModifyComponent implements OnInit {

  personalData: PersonalData;

  constructor(
    private personalService: PersonalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const personalID = parseInt(
      this.route.snapshot.params.id);
    this.personalData = await this.personalService.getPersonalDataByID(personalID);
  }

  async submitIssue(personalData: PersonalData) {
    personalData.id = this.personalData.id;
    await this.personalService.modifyPersonalData(personalData);
    this.router.navigate(['/','persons']);
  }

}
