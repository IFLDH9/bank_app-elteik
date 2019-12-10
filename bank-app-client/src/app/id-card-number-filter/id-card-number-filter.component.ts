import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankCardService} from "../bank-card.service";
import {PersonalService} from "../personal.service";

@Component({
  selector: 'app-id-card-number-filter',
  templateUrl: './id-card-number-filter.component.html',
  styleUrls: ['./id-card-number-filter.component.css']
})
export class IdCardNumberFilterComponent implements OnInit {

  @Input() statusFilter: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private personalService: PersonalService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.personalService.filterChange(e);
    this.filterChange.emit(e);
  }

}
