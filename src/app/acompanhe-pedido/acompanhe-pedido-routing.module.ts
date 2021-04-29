import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompanhePedidoPage } from './acompanhe-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhePedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhePedidoPageRoutingModule {}
