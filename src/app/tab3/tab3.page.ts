import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private route: Router,
    public alertController: AlertController ) {

  }

  irParaPedido(){
    this.route.navigate(['/pedido']);
  }

  irParaAcompanharPedido(){
    this.route.navigate(['/acompanhe-pedido']);
  }


  pedirNovamente(){
    this.route.navigate(['/carrinho']);
  }


  irParaAjuda(){
    this.route.navigate(['/ajuda']);
  }



}
