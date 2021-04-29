import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar-endereco',
  templateUrl: './pesquisar-endereco.page.html',
  styleUrls: ['./pesquisar-endereco.page.scss'],
})
export class PesquisarEnderecoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  showDefaultBar() {
    this.route.navigate(['/meus-enderecos']);
  }

  selecionarEndereco(){
    this.route.navigate(['/mapa-endereco']);
  }


  buscarMapa(){
    this.route.navigate(['/mapa-endereco']);
  }

}
