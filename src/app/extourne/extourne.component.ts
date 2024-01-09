import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../services/global-var.service';

@Component({
  selector: 'app-extourne',
  templateUrl: './extourne.component.html',
  styleUrls: ['./extourne.component.css']
})
export class ExtourneComponent {
others : any | undefined

constructor(private router:Router) { }


goToConn(data:any): void{
  console.log(data)
  this.router.navigate([''])


}
}
