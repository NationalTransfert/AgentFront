import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServeBycashService } from '../services/serve-bycash.service';
import { EmissionCashServiceService } from '../services/emission-cash-service.service';

@Component({
  selector: 'app-extourne-first-page',
  templateUrl: './extourne-first-page.component.html',
  styleUrls: ['./extourne-first-page.component.css'],
})
export class ExtourneFirstPageComponent {
  constructor(
    private router: Router,
    private serveCashService: ServeBycashService,
    private emissionCashService: EmissionCashServiceService
  ) {}

  transactionData: any = {};

  goToConn(data: any): void {
    console.log(data);
    this.serveCashService.getTransfer(data.phone).subscribe(
      (response: any) => {
        // Handle the response if needed
        console.log('Transaction', response);
        this.transactionData.ID = response._id;
        this.transactionData.FullName = response.clientFullName;
        this.transactionData.creationDate = response.creationDate;
        this.transactionData.beneficiary =
          response.beneficiaryFirstName + ' ' + response.beneficiaryLastName;
        this.transactionData.amount = response.amount;
        this.transactionData.status = response.status;
        // Additional logic or UI updates can be done here
      },
      (error) => {
        // Handle errors if the HTTP request fails
        console.error('Error Getting transaction:', error);
        alert('Transaction Reversed / Served');
        this.router.navigate(['/extourne_firstPage']);
        // Additional error handling or displaying error messages can be done here
      }
    );
  }
  goTo() {
    this.emissionCashService
      .updateTransferStatus(this.transactionData.ID)
      .subscribe((response: any) => {
        this.transactionData.status = 'reversed';
        console.log('Transaction', response);
        alert('Transaction reversed successfully');
      });
  }
}
