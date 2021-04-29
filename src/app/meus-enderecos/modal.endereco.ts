import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.html',
})
export class ModalEnderecoPage {

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    public alertController: AlertController,
    private route: Router) {

  }

  fecharModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss();
  }

  editarEndereco(){
    this.fecharModal();
    this.route.navigate(['/mapa-endereco']);
  }

  async excluirEndereco() {
    const alert = await this.alertController.create({
      header: 'Tem certeza que deseja excluir o endereço selecionado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.modalController.dismiss();
            this.excluirEnderecoDb();
          }
        }
      ]

    });

    await alert.present();
  }



  async excluirEnderecoDb() {
    const toast = await this.toastController.create({
      message: 'Endereço removido com sucesso.',
      duration: 2000
    });
    toast.present();
  }




}
