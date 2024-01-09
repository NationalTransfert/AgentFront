import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';
import { ServeBycashService } from '../services/serve-bycash.service';
import { EmissionCashServiceService } from '../services/emission-cash-service.service';

@Component({
  selector: 'app-money-service',
  templateUrl: './money-service.component.html',
  styleUrls: ['./money-service.component.css'],
})
export class MoneyServiceComponent implements OnInit {
  transactionData: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serveByCashService: ServeBycashService,
    private emissionCashService: EmissionCashServiceService,
    private serviceglobal: GlobalVarService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    const ID = params['ID'];
    const FullName = params['FullName'];
    const creationDate = params['creationDate'];
    const beneficiary = params['beneficiary'];
    const amount = params['amount'];
    const status = params['status'];

    this.transactionData.ID = ID;
    this.transactionData.FullName = FullName;
    this.transactionData.creationDate = creationDate;
    this.transactionData.beneficiary = beneficiary;
    this.transactionData.amount = amount;
    this.transactionData.status = status;
  }
  serve_by_cash() {
    this.emissionCashService
      .updateTransferStatus(this.transactionData.ID)
      .subscribe((response: any) => {
        this.transactionData.status = 'Served';
        console.log('Transaction', response);
        alert('Transaction served successfully');
      });
  }
  serve_by_wallet() {
    this.router.navigate(['/wallet_form']);
  }
}
