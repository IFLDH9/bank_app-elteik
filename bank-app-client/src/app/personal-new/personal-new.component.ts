import { Component, OnInit } from '@angular/core';
import {Card} from "../../domain/card";
import {BankCardService} from "../bank-card.service";
import {Router} from "@angular/router";
import {PersonalData} from "../../domain/personal-data";
import {PersonalService} from "../personal.service";

@Component({
  selector: 'app-personal-new',
  templateUrl: './personal-new.component.html',
  styleUrls: ['./personal-new.component.css']
})
export class PersonalNewComponent implements OnInit {

  personalData : PersonalData;

  constructor(private personalService : PersonalService,
              private router : Router) { }

  ngOnInit() {
    this.personalData = {
      id : null,
      name : null,
      password : null,
      idCardNumber : '',
      dateOfBirth : null,
      role : null,
      accounts : null
    };
  }

  async submitPersonalData(personalData : PersonalData){
    await this.personalService.createPersonalData(personalData);
    this.router.navigate(['/']);
  }
}
