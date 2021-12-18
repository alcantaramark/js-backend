import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat/chat.service';
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { MessagesMutations } from 'src/app/graphql/mutations/messages-mutations';
import { MessageQueries } from 'src/app/graphql/queries/message-queries';
import { MessageSubscriptions } from 'src/app/graphql/subscriptions/message-subscriptions';
import { ChatSupportInterface } from './chat-support-interface';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss']
})
export class ChatSupportComponent implements OnInit {
  constructor(private chatService: ChatService) { 
    
      
  }

  ngOnInit(): void {
    //setTimeout(() => this.chatService.subscribeToNewMessages());
   
  }

  ngAfterViewInit(){
    this.chatService.subscribeToNewMessages();
  }

  sendMessage(){
    this.chatService.sendMessage().subscribe();
  }

 
}
