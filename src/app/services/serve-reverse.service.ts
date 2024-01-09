import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServeReverseService {

  url = environment.baseURL3
  constructor(private http: HttpClient) { }

  getTransfer(reference:any){
    return this.http.get(`${this.url}reverse/getTransfer/${reference}`)
  }

  addMotif(motif:string){
    return this.http.post(`${this.url}reverse/motif`,motif)

  }

  validateTransaction(canalId:any){
    return this.http.post(`${this.url}reverse/validate`,canalId)

  }
}
