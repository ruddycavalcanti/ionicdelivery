import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFormaPgtoPage } from './add-forma-pgto.page';

const routes: Routes = [
  {
    path: '',
    component: AddFormaPgtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFormaPgtoPageRoutingModule {}
