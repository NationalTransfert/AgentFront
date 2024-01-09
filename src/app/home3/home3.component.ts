import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';
import { ServeBycashService } from '../services/serve-bycash.service';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css'],
})
export class Home3Component {
  constructor(
    private router: Router,
    private global: GlobalVarService,
    private serveCashService: ServeBycashService
  ) {}

  goToConn(data: any): void {
    console.log(data);
    this.serveCashService.getTransfer(data.Reference).subscribe(
      (response: any) => {
        // Handle the response if needed
        console.log('Transaction', response);
        this.router.navigate(['/money_service'], {
          queryParams: {
            ID: response._id,
            FullName: response.clientFullName,
            creationDate: response.creationDate,
            amount: response.amount,
            beneficiary:
              response.beneficiaryFirstName +
              ' ' +
              response.beneficiaryLastName,
            status: response.status,
          },
        });
        // Additional logic or UI updates can be done here
      },
      (error) => {
        // Handle errors if the HTTP request fails
        alert('Transaction Reversed / Served');
        // Additional error handling or displaying error messages can be done here
      }
    );
  }
}
