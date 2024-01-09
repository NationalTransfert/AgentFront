import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Beneficiary} from '../model/beneficiary-model';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Client } from '../model/client-model';

@Injectable({
  providedIn: 'root'
})
export class ProspectServiceService {
url = environment.baseURL1
  constructor(private http: HttpClient) { }


  addBeneficiary(identityNumber: string,data:any){
    return this.http.post<Beneficiary[]>(`${this.url}beneficiary/${identityNumber}`,data)
  }
  getAllBeneficiaryByClientId(identityNumber: string){

    return this.http.get<Beneficiary[]>(`${this.url}beneficiary/${identityNumber}`);

  }

  addClient(data:any){
    return this.http.post<Beneficiary[]>(`${this.url}prospect`,data)
  }
  getClientById(identityNumber: string){

    return this.http.get<Client[]>(`${this.url}prospect/${identityNumber}`);

  }



}
