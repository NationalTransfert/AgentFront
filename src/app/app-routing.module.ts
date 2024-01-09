import { ExtourneFirstPageComponent } from './extourne-first-page/extourne-first-page.component';
import { MoneyServiceComponent } from './money-service/money-service.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTransfertComponent } from './account-transfert/account-transfert.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';


import { UserDataComponent } from './user-data/user-data.component';
import { ExtourneComponent } from './extourne/extourne.component';
import { BeneficiaryFormComponent } from './beneficiary-form/beneficiary-form.component';
import { WalletFormComponent } from './wallet-form/wallet-form.component';
import { OtpFormComponent } from './otp-form/otp-form.component';

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'user_data', component: UserDataComponent},
    { path: 'account_transfer', component: AccountTransfertComponent},
    { path: 'home2', component: Home2Component},
    { path: 'add_beneficiary', component: AddBeneficiaryComponent},
    { path: 'add_reference', component: Home3Component},
    { path: 'money_service', component: MoneyServiceComponent},
    { path: 'extourne', component: ExtourneComponent},
    { path: 'beneficiary_form', component: BeneficiaryFormComponent},
    { path: 'wallet_form', component: WalletFormComponent},
    { path: 'otp_form', component: OtpFormComponent},
    { path: 'extourne_firstPage', component: ExtourneFirstPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
