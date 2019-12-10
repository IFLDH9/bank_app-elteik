import { Component, OnInit } from '@angular/core';
import {Card} from "../../domain/card";
import {ActivatedRoute, Router} from "@angular/router";
import {BankCardService} from "../bank-card.service";
import { Role } from 'src/domain/role';
import {PersonalData} from "../../domain/personal-data";
import {PersonalService} from "../personal.service";

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  Role = Role;
  personalData: PersonalData;

  constructor(
    private route: ActivatedRoute,
    private personalService: PersonalService,
    private router: Router
  ) {}

  async ngOnInit() {
    const personID = parseInt(this.route.snapshot.params.id);
    this.personalData = await this.personalService.getPersonalDataByID(personID);
  }

  editPersonalData() {
    this.router.navigate([
      "bank", "persons","modify",this.personalData.id]);
  }

  deletePersonalData()
  {
    this.personalService.deletePersonalData(this.personalData);
    this.router.navigate(['persons']);
  }
}
