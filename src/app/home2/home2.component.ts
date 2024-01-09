import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client-model';
import { GlobalVarService } from '../services/global-var.service';
import { ProspectServiceService } from '../services/prospect-service.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
select : string | undefined
globalvar:any
client: Client []| undefined
  constructor(private router:Router,
    private serviceglobal: GlobalVarService,
    private service:ProspectServiceService) { }


  ngOnInit() {

  //  this.serviceglobal.getMyClient()
   console.log( this.serviceglobal.getMyClient());


  }

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
             this.serviceglobal.setMyVariable("bywallet")

       },
       (error) => {
        window.alert("Le client n'existe pas ")

      });


    }

}
