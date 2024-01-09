import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
  private myVariable: any;
  private client:any;


  constructor() { }
  getMyVariable() {
    return this.myVariable;
  }

  setMyVariable(value: any) {
    this.myVariable = value;
  }

  getMyClient() {
    return this.client;
  }

  setMyClient(value: any) {
    this.client = value;
  }

}
