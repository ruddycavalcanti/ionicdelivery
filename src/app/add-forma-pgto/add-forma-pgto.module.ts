import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFormaPgtoPageRoutingModule } from './add-forma-pgto-routing.module';

import { AddFormaPgtoPage } from './add-forma-pgto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFormaPgtoPageRoutingModule
  ],
  declarations: [AddFormaPgtoPage]
})
export class AddFormaPgtoPageModule {}
