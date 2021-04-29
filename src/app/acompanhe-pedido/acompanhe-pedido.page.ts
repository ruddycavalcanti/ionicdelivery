import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-acompanhe-pedido',
  templateUrl: './acompanhe-pedido.page.html',
  styleUrls: ['./acompanhe-pedido.page.scss'],
})
export class AcompanhePedidoPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  irParaAjuda(){

    this.route.navigate(['/ajuda']);
  }

}
