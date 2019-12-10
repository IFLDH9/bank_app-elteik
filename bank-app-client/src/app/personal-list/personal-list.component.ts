import { Component, OnInit } from '@angular/core';
import {BankCardService} from "../bank-card.service";
import {PersonalService} from "../personal.service";

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent implements OnInit {

  constructor(
    public personalService: PersonalService
  ) { }

  ngOnInit() {
    this.personalService.getPersons();
  }

}
