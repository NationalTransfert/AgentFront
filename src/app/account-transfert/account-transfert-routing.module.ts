import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTransfertComponent } from './account-transfert.component';

const routes: Routes = [
  {path: '', component:AccountTransfertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTransfertRoutingModule { }
