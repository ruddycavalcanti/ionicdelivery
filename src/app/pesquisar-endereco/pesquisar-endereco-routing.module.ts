import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarEnderecoPage } from './pesquisar-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarEnderecoPageRoutingModule {}
