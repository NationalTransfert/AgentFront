import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client-model';
import { GlobalVarService } from '../services/global-var.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  globalvar:any
  client!:Client
  constructor(private router:Router, private serviceglobal: GlobalVarService) { }
  ngOnInit() {

    this.client= this.serviceglobal.getMyClient()

    // console.log( this.serviceglobal.getMyClient());

    }
  goToConn(): void{

    this.router.navigate(['/account_transfer'])


  }
}
