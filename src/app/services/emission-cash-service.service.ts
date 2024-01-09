import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Beneficiary } from '../model/beneficiary-model';
import { Client } from '../model/client-model';

@Injectable({
  providedIn: 'root',
})
export class EmissionCashServiceService {
  url = environment.baseURL2;
  constructor(private http: HttpClient) {}

  checkAmount(codeAgent: any, amount: any) {
    return this.http.post(`${this.url}cash/${codeAgent}`, amount);
  }

  feeManagement(
    feeMode: any,
    amount: any,
    totalTransferAmount: any,
    feeTransferAmount: any,
    withNotification: boolean
  ) {
    return this.http.post(
      `${this.url}cash/feeManagement/${feeMode}`,
      amount,
      totalTransferAmount
    );
  }

  // checkOtp(otp:any,identityNumber:any){
  //   return this.http.post(`${this.url}wallet/email/check/${identityNumber}`,otp)

  // }

  /*validateTransaction(identityNumber:any,agentId:any,canalId:any){
    return this.http.post(`${this.url}cash/validate/${identityNumber}`,agentId,canalId)
  }*/

  validateTransaction(body: any) {
    return this.http.post(`${this.url}cash/validate?canalId=1`, body);
  }

  updateTransferStatus(reference: string) {
    return this.http.put(
      `${this.url}cash/updateTransferStatus/served/${reference}`,
      null
    );
  }

  addProspect(data: any) {
    return this.http.post<Client[]>(`${this.url}cash/addProspect`, data);
  }

  getAllBeneficiariesByIdentityNumber(identityNumber: any) {
    return this.http.get<Beneficiary[]>(
      `${this.url}cash/getBeneficiaries/${identityNumber}`
    );
  }

  getKYC(identityNumber: any) {
    return this.http.get<Client[]>(`${this.url}cash/${identityNumber}`);
  }
}
