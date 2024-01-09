import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserDataComponent } from './user-data/user-data.component';
import { AccountTransfertComponent } from './account-transfert/account-transfert.component';
import { HeaderComponent } from './header/header.component';
import { Home2Component } from './home2/home2.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { Home3Component } from './home3/home3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoneyServiceComponent } from './money-service/money-service.component';
import { ExtourneComponent } from './extourne/extourne.component';
import { BeneficiaryFormComponent } from './beneficiary-form/beneficiary-form.component';
import { WalletFormComponent } from './wallet-form/wallet-form.component';
import { OtpFormComponent } from './otp-form/otp-form.component';
import { ExtourneFirstPageComponent } from './extourne-first-page/extourne-first-page.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    UserDataComponent,
     AccountTransfertComponent,
     HeaderComponent,
     Home2Component,
     AddBeneficiaryComponent,
     Home3Component,
     MoneyServiceComponent,
     ExtourneComponent,
     BeneficiaryFormComponent,
     WalletFormComponent,
     OtpFormComponent,
     ExtourneFirstPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    IonicModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   private keycloakAngular: KeycloakService,
  // ) {
  //   this.keycloakAngular.init({
  //     config: {
  //       url: 'http://localhost:8080/auth',
  //       realm: 'Login Agent',
  //       clientId: 'TransfertNational_agent',
  //     },
  //     initOptions: {
  //       onLoad: 'login-required',
  //       checkLoginIframe: false,
  //     },
  //     enableBearerInterceptor: true,
  //     bearerExcludedUrls: ['/assets', '/clients/public'],
  //   }).then(() => {
  //     // keycloak initialized
  //   }).catch(error => console.error(error));
  // }
 }
