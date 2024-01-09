import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Beneficiary } from '../model/beneficiary-model';
import { Client } from '../model/client-model';

@Injectable({
  providedIn: 'root'
})
export class EmissionServiceService {

  url = environment.baseURL2
  constructor(private http: HttpClient) { }

  checkAmount(identityNumber:any,amount:any){
    return this.http.post(`${this.url}wallet/${identityNumber}`,amount)
  }

  feeManagement(feeMode:any, amount:any, totalTransferAmount:any,feeTransferAmount:any,withNotification:boolean){
    return this.http.post(`${this.url}wallet/feeManagement/${feeMode}`,amount,totalTransferAmount)

  }

  checkOtp(otp:any,identityNumber:any){
    return this.http.post(`${this.url}wallet/email/check/${identityNumber}`,otp)

  }

  validateTransaction(identityNumber:any,agentId:any,canalId:any){
    return this.http.post(`${this.url}wallet/validate/${identityNumber}`,agentId,canalId)
  }

  addBeneficiary(data:any){
    return this.http.post<Beneficiary[]>(`${this.url}wallet/addBeneficiary`,data)  }

    getAllBeneficiariesByIdentityNumber(identityNumber:any){
      return this.http.get<Beneficiary[]>(`${this.url}wallet/getBeneficiaries/${identityNumber}`)

    }

    getKYC(identityNumber:any){
      return this.http.get<Client[]>(`${this.url}wallet/${identityNumber}`)

    }
  }
