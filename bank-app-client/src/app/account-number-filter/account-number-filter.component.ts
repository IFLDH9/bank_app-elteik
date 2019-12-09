import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BankAccountService} from "../bank-account-service";

@Component({
  selector: 'app-account-number-filter',
  templateUrl: './account-number-filter.component.html',
  styleUrls: ['./account-number-filter.component.css']
})
export class AccountNumberFilterComponent implements OnInit {

  @Input() statusFilter: string = '';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private bankAccountService: BankAccountService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.bankAccountService.filterChange(e);
    this.filterChange.emit(e);
  }

}

