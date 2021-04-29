import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  abrirOpcoesS = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }


  abrirOpcoesSenha() {
    this.abrirOpcoesS = !this.abrirOpcoesS;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.abrirOpcoesS) {
      this.abrirOpcoesS = true;
    } else {
      this.abrirOpcoesS = false;
  }

}


sair(){
  this.route.navigate(['/login']);
}

}
