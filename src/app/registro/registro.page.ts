import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  IS_DESKTOP = false;

  constructor(
    private route: Router,
    public alertController: AlertController ) {

  }


  ngOnInit() {
  }

  irParaLogin(){
    this.route.navigate(['/login']);
  }

  irParaForgetPassword(){
    this.route.navigate(['/esqueceu-senha']);
  }

  irParaHome(){
    this.route.navigate(['/tabs/home']);
  }

  abrirLinkTermos(){

  }

  loginApple(){
    this.route.navigate(['/tabs/home']);
  }

  loginGoogle(){
    this.route.navigate(['/tabs/home']);
  }

  loginFacebook(){
    this.route.navigate(['/tabs/home']);
  }


}
