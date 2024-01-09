import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Client } from '../model/client-model';

@Injectable({
  providedIn: 'root',
})
export class ServeBycashService {
  url = environment.baseURL3;
  constructor(private http: HttpClient) {}

  getTransfer(reference: any) {
    return this.http.get(`${this.url}cash/getTransfer/${reference}`);
  }

  addProspect(data: any) {
    return this.http.post<Client[]>(`${this.url}cash/addProspect`, data);
  }

  validateTransaction(reference: any) {
    return this.http.post(`${this.url}cash/validate?reference=${reference}`, {
      reference,
    });
  }
}
