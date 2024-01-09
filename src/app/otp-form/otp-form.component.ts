import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-otp-form',
  templateUrl: './otp-form.component.html',
  styleUrls: ['./otp-form.component.css']
})
export class OtpFormComponent {


  constructor(private router:Router, private global:GlobalVarService) { }

  goToConn(data:any): void{
    console.log(data)



  }
}
