import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';

import { AlertController } from '@ionic/angular';

import { ActionSheetController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formas-de-pagamento',
  templateUrl: './formas-de-pagamento.page.html',
  styleUrls: ['./formas-de-pagamento.page.scss'],
})
export class FormasDePagamentoPage implements OnInit {

  constructor(
    private route: Router,
    public toastController: ToastController,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }




  irParaAddFormaPgto(edit){
    this.route.navigate(['/add-forma-pgto']);
  }

  async opcoesFormaPgto(nomeCartao) {
    const actionSheet = await this.actionSheetController.create({
      header: 'O que deseja fazer com o ' + nomeCartao +  ' ?',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
          this.irParaAddFormaPgto('edit');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Excluir',
        icon: 'trash-outline',
        role: 'destructive',
        handler: () => {
          this.excluirFormaPgto(nomeCartao);
        }
      }]
    });
    await actionSheet.present();
  }






  async excluirFormaPgto(nomeCartao) {
    const alert = await this.alertController.create({
      header: 'Quer excluir este cartão ?',
      message: 'Ao confirmar, o cartão ' + nomeCartao +  ' não estará mais disponível na sua lista de cartões salvos no aplicativo.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Excluir',
          handler: () => {
            this.removerFormadePagamento();
          }
        }
      ]

     // buttons: ['Cancelar', 'Sim']
    });

    await alert.present();
  }



    async removerFormadePagamento() {
    const toast = await this.toastController.create({
      message: 'Forma de pagamento removida com sucesso.',
      duration: 2000
    });
    toast.present();
  }

}
