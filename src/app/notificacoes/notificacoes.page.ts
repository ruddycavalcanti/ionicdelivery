import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController) {}

  ngOnInit() {
  }



  async removerNotificacao() {
    const toast = await this.toastController.create({
      message: 'Notificação removida com sucesso.',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }


  async removerTodasNotificacao() {
    const toast = await this.toastController.create({
      message: 'Todas as notificações foram removidas com sucesso.',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async excluirNotificacao() {
    const alert = await this.alertController.create({
      header: 'Tem certeza que deseja remover todas as notificações?',
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
            this.removerTodasNotificacao();
          }
        }
      ]
    });

    await alert.present();
  }

  limparNotificacoes(){

    this.excluirNotificacao();
  }

}
