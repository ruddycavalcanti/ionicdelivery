import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalEnderecoPage} from './modal.endereco';

import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.page.html',
  styleUrls: ['./meus-enderecos.page.scss'],
})
export class MeusEnderecosPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async opcoesEndereco() {
    const modal = await this.modalController.create({
      component: ModalEnderecoPage
    });
    return await modal.present();
  }


  selecionarEndereco(){
    alert('selecionar Endereco');
    this.route.navigate(['/tabs/home']);
  }

  irParaPesquisarEndereco(){
    this.route.navigate(['/pesquisar-endereco']);
  }

  selecionarLocalizacaoAtual(){
    this.route.navigate(['/mapa-endereco']);
  }



}
