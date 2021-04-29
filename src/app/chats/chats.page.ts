import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  type = '';

  constructor(private route: Router) { }


  ngOnInit() {

    this.type = 'abertos';
  }

  irParaConversa(){

    this.route.navigate(['/chat']);
  }


}
