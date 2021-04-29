import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private route: Router) { }

  irParaCupons(){
    this.route.navigate(['/cupons']);
  }

  irParaNotificacoes(){
    this.route.navigate(['/notificacoes']);
  }

  irParaEnderecos(){
    this.route.navigate(['/meus-enderecos']);
  }

  irParaFormasPgto(){

    this.route.navigate(['/formas-de-pagamento']);
  }

  irParaMeusDados(){
    this.route.navigate(['/meus-dados']);
  }

  irParaChats(){
    this.route.navigate(['/chats']);
  }

}
