import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarEnderecoPageRoutingModule } from './pesquisar-endereco-routing.module';

import { PesquisarEnderecoPage } from './pesquisar-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarEnderecoPageRoutingModule
  ],
  declarations: [PesquisarEnderecoPage]
})
export class PesquisarEnderecoPageModule {}
