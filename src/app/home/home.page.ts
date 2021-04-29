import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  semFarmacias = false;

  constructor(
    private route: Router,
    public alertController: AlertController ) {

  }

  IrParaMeusEnderecos() {
    this.route.navigate(['/meus-enderecos']);
  }

  irParaProduto(){
    this.route.navigate(['/produto']);
  }

  irParaCategoria(){
    this.route.navigate(['/categoria']);
  }


  irParaCarrinho(){
    this.route.navigate(['/carrinho']);
  }


  irParaLogin(){

    this.route.navigate(['/login']);
  }

  irParaRegistro(){

    this.route.navigate(['/registro']);
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
