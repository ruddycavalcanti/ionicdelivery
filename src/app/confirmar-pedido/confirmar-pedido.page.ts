import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.page.html',
  styleUrls: ['./confirmar-pedido.page.scss'],
})
export class ConfirmarPedidoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  concluirPedido(){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pedidoConcluido: false
      }
    };


    this.route.navigate(['/pedido', navigationExtras]);

  }

}
