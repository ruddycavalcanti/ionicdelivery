import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  title = '';

  descricao = '';


  itensCarrinho = 1;

  constructor(
    private route: Router,
    public alertController: AlertController) { }


  ngOnInit() {

    this.title = 'Novalgina 1g Sanofi Aventis 10 Comprimidos';

    this.descricao = '';

  }



  irParaCarrinho(){
    this.route.navigate(['/carrinho']);
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


  diminuirCarrinho(){
    this.itensCarrinho = this.itensCarrinho - 1;
  }

  aumentarCarrinho(){
    this.itensCarrinho = this.itensCarrinho + 1;
  }



}
