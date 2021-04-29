import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  pedidoConcluido: any = true;



  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute) {

      this.activatedRoute.queryParams.subscribe(params => {
        console.log( 'params' , params );
        if (params && params.pedidoConcluido){
          this.pedidoConcluido = params.pedidoConcluido;
        }
    });

 }



  ngOnInit() {

  }


  irParaAjuda(){
    this.route.navigate(['/ajuda']);
  }

  irParaAvaliar(){
    this.route.navigate(['/avaliacao']);
  }

}
