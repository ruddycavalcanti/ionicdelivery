import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  type = '';

  regrasAbertas = false;

  constructor(
    private route: Router,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {

    this.type = 'ativos';
  }


  verRegrasCupom() {
    this.regrasAbertas = !this.regrasAbertas;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.regrasAbertas) {
      this.regrasAbertas = true;
    } else {
      this.regrasAbertas = false;
  }


}



async addCupom() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Adicionar cupom de desconto',
    inputs: [
      {
        name: 'codigo_cupom',
        type: 'text',
        placeholder: 'Digite aqui o código do cupom'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Adicionar',
        handler: () => {
          this.cupomAdicionado();
        }
      }
    ]
  });

  await alert.present();
}

async cupomAdicionado() {
  const toast = await this.toastController.create({
    message: 'Cupom adicionado com sucesso.',
    duration: 2000
  });
  toast.present();
}


}
