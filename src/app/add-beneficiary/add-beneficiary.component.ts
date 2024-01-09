import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProspectServiceService } from '../services/prospect-service.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {
  select : string | undefined
  select1 : string | undefined
  select2 : string | undefined
  select3 : string | undefined
  select4 : string | undefined
  select5 : string | undefined
  select6 : string | undefined
  constructor(private router:Router,
    private service:ProspectServiceService) { }
  // goToConn(data:any): void{
  //   console.log(data)
  //   this.router.navigate([''])
  //   return this.service.addClient(data).subscribe(() => {
  //     console.log("saved")
  //   },
  //   (error: HttpErrorResponse) => {
  //     alert(error.message);
  //   }

  //   )

  // }


  goToConn(data: any) {
    return this.service.addClient(data).subscribe(
      (response:{}) => {
        console.log("here"+data)
        this.router.navigate([''])
        console.log("saved")

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
