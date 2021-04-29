import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-endereco',
  templateUrl: './add-endereco.page.html',
  styleUrls: ['./add-endereco.page.scss'],
})
export class AddEnderecoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  salvarEndereco(){
    this.route.navigate(['/meus-enderecos']);
  }

}
