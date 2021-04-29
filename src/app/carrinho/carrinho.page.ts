import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  existeFormaPagamento = true;
  textoBotao = 'Selecione a forma de Pagamento';

  constructor(
    private route: Router,
    public toastController: ToastController,
    public alertController: AlertController) {}

  ngOnInit() {

    if (this.existeFormaPagamento === true){
      this.textoBotao = 'Fazer Pedido';
    } else {
      this.textoBotao = 'Selecione a forma de Pagamento';
    }
  }

  irParaHome(){
    this.route.navigate(['/home']);
  }

  irParaFormasPgto(){
    this.route.navigate(['/formas-de-pagamento']);
  }

  irParaConfirmarPedido(){
    this.route.navigate(['/confirmar-pedido']);
  }

  irParaMeusEnderecos(){
    this.route.navigate(['/meus-enderecos']);
  }


  irParaCupons(paginaAnterior){
    this.route.navigate(['/cupons']);
  }

  limparCarrinho(){

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
        },
      ],
      buttons: [
         {
          text: 'Adicionar',
          handler: () => {
            this.cupomAdicionado();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ir para Meus Cupoms',
          handler: () => {
            this.irParaCupons('carrinho');
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


  async excluirCarrinho() {
    const alert = await this.alertController.create({
      header: 'Tem certeza que deseja remover o produto selecionado?',
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
            this.removerProdutoCarrinho();
          }
        }
      ]
    });

    await alert.present();
  }


  async removerProdutoCarrinho() {
    const toast = await this.toastController.create({
      message: 'Produto removido com sucesso.',
      duration: 2000
    });
    toast.present();
  }



}
