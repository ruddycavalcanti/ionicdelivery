import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEnderecoPage } from './add-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: AddEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEnderecoPageRoutingModule {}
