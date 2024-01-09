import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../model/beneficiary-model';
import { GlobalVarService } from '../services/global-var.service';
import { ProspectServiceService } from '../services/prospect-service.service';
import { EmissionCashServiceService } from '../services/emission-cash-service.service';

@Component({
  selector: 'app-account-transfert',
  templateUrl: './account-transfert.component.html',
  styleUrls: ['./account-transfert.component.css'],
})
export class AccountTransfertComponent {
  balance_step = false;
  coast_step = false;
  beneficiary_step = false;
  otp_step = false;
  step = 1;
  balance: string | undefined;
  selectedOption: string | undefined;
  selectedOptionbene: string | undefined;
  Optionbene: Beneficiary | undefined;
  opt: string | undefined;
  check: boolean = false;
  globalvar: string = this.serviceglobal.getMyVariable();
  client: any;
  id: any | undefined;
  public beneficiary!: Beneficiary[];
  public benefi!: Beneficiary;

  constructor(
    private router: Router,
    private serviceglobal: GlobalVarService,
    private service: ProspectServiceService,
    private emissionCashService: EmissionCashServiceService
  ) {}

  ngOnInit() {
    this.client = this.serviceglobal.getMyClient();
    this.id = String(Object.values(this.client)[0]);
    this.getBenebiciary(this.id);
    console.log('here');
  }

  getBenebiciary(id: any) {
    return this.service
      .getAllBeneficiaryByClientId(id)
      .subscribe((response: Beneficiary[]) => {
        console.log('geted');
        console.log(response);
        this.beneficiary = response;
      });

    (error: HttpErrorResponse) => {
      alert(error.message);
    };
  }

  next(data: any): void {
    if (this.step == 1) {
      this.balance_step = true;
      this.step++;
      console.log(data);
    } else if (this.step == 2) {
      this.coast_step = true;
      this.step++;
      console.log(data);
    } else if (this.step == 3) {
      if (this.serviceglobal.getMyVariable() == 'byaccount') {
        console.log('by account here');
        this.beneficiary_step = true;
        this.step++;
      }
      if (this.serviceglobal.getMyVariable() == 'bywallet') {
        console.log('by wallet here');
      }

      console.log(data);
    }
  }

  previous() {
    this.step--;

    if (this.step == 2) {
      this.coast_step = false;
    }
    if (this.step == 3) {
      this.beneficiary_step = false;
    }
    if (this.step == 4) {
      this.otp_step = false;
    }
  }

  submit(data: any) {
    if (this.step == 4) {
      // if(this.serviceglobal.getMyVariable()=="byaccount"){
      //   console.log("by account here")
      // }
      // if(this.serviceglobal.getMyVariable()=="bywallet"){
      //   console.log("by wallet here")
      // }
      this.beneficiary_step = true;
      console.log(data);
    }
  }
  checkCheckBoxvalue() {
    console.log(this.check);
    if (this.check) {
      this.check = false;
    } else this.check = true;
  }
  goToConn1(data: any): void {
    console.log(data);

    this.client = this.serviceglobal.getMyClient();
    this.id = String(Object.values(this.client)[0]);
    console.log(String(Object.values(this.client)[0]));
    this.service.addBeneficiary(this.id, data).subscribe(
      (response: {}) => {
        console.log('here' + data);
        this.router.navigate(['/account_transfer']);
        this.getBenebiciary(this.id);
        console.log('saved');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  setSelectedBeneficiary(selectedBeneficiary: any): void {
    console.log(selectedBeneficiary);

    this.benefi = selectedBeneficiary;
  }

  onSendButtonClick() {
    console.log('Sending transaction to server');

    const requestBody = {
      beneficiary: this.benefi,
      client: this.client,
      amount: this.balance,
      type: this.serviceglobal.getMyVariable(),
      otp: this.opt,
    };

    console.log('Request body:', requestBody);

    // You need to pass the appropriate parameters to validateTransaction
    this.emissionCashService.validateTransaction(requestBody).subscribe(
      (response: any) => {
        // Handle the response if needed
        alert('Transaction validated');
        console.log('Transaction validated:', response);
        this.router.navigate(['/money_service'], {
          queryParams: {
            ID: response.reference,
            FullName: response.clientFullName,
            creationDate: response.creationDate,
            amount: response.amount,
            beneficiary:
              response.beneficiaryFirstName +
              ' ' +
              response.beneficiaryLastName,
          },
        });
        // Additional logic or UI updates can be done here
      },
      (error) => {
        // Handle errors if the HTTP request fails
        console.error('Error validating transaction:', error);
        // Additional error handling or displaying error messages can be done here
      }
    );
  }
}
