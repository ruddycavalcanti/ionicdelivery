import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaEnderecoPageRoutingModule } from './mapa-endereco-routing.module';

import { MapaEnderecoPage } from './mapa-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEnderecoPageRoutingModule
  ],
  declarations: [MapaEnderecoPage]
})
export class MapaEnderecoPageModule {}
