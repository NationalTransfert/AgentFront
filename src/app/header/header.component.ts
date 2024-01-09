import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name:string|undefined
  constructor(private keycloakService: KeycloakService) {

  //  keycloakService.isLoggedIn() ;
  //   //keycloakService.login() ;
  //  //  keycloakService.logout() ;
  // keycloakService.getUsername();
  //   // keycloakService.hasRealmRole(role)


  }
  ngOnInit(){

  }

  logout(){
    this.keycloakService.logout() ;
  }

}
