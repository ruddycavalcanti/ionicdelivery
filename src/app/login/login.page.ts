import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  IS_DESKTOP = false;
  IS_FORM_ACTIVE =  false;

  constructor(
    private route: Router,
    public alertController: AlertController,
    public platform: Platform) { }

  ngOnInit() {

    if ( this.platform.is('desktop') ){
      this.IS_DESKTOP = true;
    }
  }


  irParaForgetPassword(){
    this.route.navigate(['/esqueceu-senha']);
  }

  irParaRegister(){
    this.route.navigate(['/registro']);
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
