import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss']
})
export class ChatSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  sendMessage(){
    alert('message sent');
  }
}
