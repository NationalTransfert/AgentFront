import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServeBywalletService {

  url = environment.baseURL3
  constructor(private http: HttpClient) { }

  getTransfer(reference:any){
    return this.http.get(`${this.url}wallet/getTransfer/${reference}`)
  }

  getWallet(identityNumber:any){
    return this.http.get(`${this.url}wallet/getWallet/${identityNumber}`)
  }

  checkOTP(otp:any, identityNumber:any){
    return this.http.post(`${this.url}wallet/email/check/${identityNumber}`,otp)

  }
  // addWallet(){

  // }

  validateTransaction(canalId:any){
    return this.http.post(`${this.url}wallet/validate`,canalId)

  }
}
