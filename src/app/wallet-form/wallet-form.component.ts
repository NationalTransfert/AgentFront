import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent {
  constructor(private router:Router, private global:GlobalVarService) { }

  goToConn(data:any): void{
    console.log(data)
    this.router.navigate(['/otp_form'])


  }

}
