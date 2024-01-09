import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, VERSION } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { catchError, throwError } from 'rxjs';
import { Client } from '../model/client-model';
import { GlobalVarService } from '../services/global-var.service';
import { ProspectServiceService } from '../services/prospect-service.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  client: Client []| undefined
  select: string | undefined
  name:string|undefined
  constructor(
    private router:Router,
    private serviceglobal: GlobalVarService,
   // private keycloakService: KeycloakService,
    private service:ProspectServiceService

    ) { }


  goToConn(data:any){
    console.log(String(Object.values(data)[1]))

    this.service.getClientById(String(Object.values(data)[1])).subscribe((response: Client[]) =>
       {
           this.client=response;
           console.log(response)
          this.serviceglobal.setMyClient(response)
          //  if(response == null){

          //    //this.router.navigate([''])
          //  }

             this.router.navigate(['/user_data'])
             this.serviceglobal.setMyVariable("byaccount")

       },
       (error) => {
        window.alert("Le client n'existe pas ")

      });









  }

}

