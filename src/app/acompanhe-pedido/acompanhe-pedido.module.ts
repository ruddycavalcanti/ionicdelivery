import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompanhePedidoPageRoutingModule } from './acompanhe-pedido-routing.module';

import { AcompanhePedidoPage } from './acompanhe-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompanhePedidoPageRoutingModule
  ],
  declarations: [AcompanhePedidoPage]
})
export class AcompanhePedidoPageModule {}
