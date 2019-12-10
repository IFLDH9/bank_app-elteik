import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankAccountService} from "../bank-account-service";
import {BankCardService} from "../bank-card.service";

@Component({
  selector: 'app-card-number-filter',
  templateUrl: './card-number-filter.component.html',
  styleUrls: ['./card-number-filter.component.css']
})
export class CardNumberFilterComponent implements OnInit {

  @Input() statusFilter: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private bankCardService: BankCardService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.bankCardService.filterChange(e);
    this.filterChange.emit(e);
  }

}
