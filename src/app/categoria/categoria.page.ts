import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    private route: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }


  irParaProduto(){
    this.route.navigate(['/produto']);
  }


  async addCarrinho() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Adicionado!',
      message: 'Produto adicionado ao carrinho',
      buttons: [
        {
          text: 'Continuar Comprando',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Finalizar Compra',
          handler: () => {
            this.route.navigate(['/carrinho']);
          }
        }
      ]
    });

    await alert.present();
  }



}
