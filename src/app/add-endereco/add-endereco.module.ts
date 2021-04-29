import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEnderecoPageRoutingModule } from './add-endereco-routing.module';

import { AddEnderecoPage } from './add-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEnderecoPageRoutingModule
  ],
  declarations: [AddEnderecoPage]
})
export class AddEnderecoPageModule {}
