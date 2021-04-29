import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private route: Router) {}

  ngOnInit() {
  }

  avaliar(){
    this.route.navigate(['/tabs/home']);
  }

}
