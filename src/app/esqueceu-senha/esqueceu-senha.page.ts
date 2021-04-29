import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {


  constructor(
    private route: Router,
    public toastController: ToastController ) {

  }


  ngOnInit() {
  }


  irParaLogin(){
    this.route.navigate(['/login']);
  }

  recuperarSenha(){
    this.senhaEnviada();
  }


  async senhaEnviada() {
    const toast = await this.toastController.create({
      message: 'Siga as instruções no seu email para a troca da senha.',
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }

}
