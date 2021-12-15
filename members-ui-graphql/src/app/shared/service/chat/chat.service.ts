import { Injectable, OnInit } from '@angular/core';
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { MessagesMutations } from 'src/app/graphql/mutations/messages-mutations';
import { MessageQueries } from 'src/app/graphql/queries/message-queries';
import { MessageSubscriptions } from 'src/app/graphql/subscriptions/message-subscriptions';
import { ChatSupportInterface } from '../../chat-support/chat-support-interface';


@Injectable({
  providedIn: 'root'
})
export class ChatService{
  private chatQuery: QueryRef<any>;
  private chat: Observable<any>;
  
  
  constructor(private messageQueries: MessageQueries
    , private apollo: Apollo
    , private messageSubscriptions: MessageSubscriptions
    , private messageMutations: MessagesMutations) { 
    
      this.chatQuery = this.apollo.watchQuery({
        query: messageQueries.GET_MESSAGE
      });

      this.chat = this.chatQuery.valueChanges;
      this.chat.subscribe({next: (data) => console.log('subscription Data', data), error: (e) => console.error('error', e)})
    }

    subscribeToNewMessages(){
      this.chatQuery.subscribeToMore({
        document: this.messageSubscriptions.NEW_MESSAGE,
        updateQuery: (prev, { subscriptionData }) => {
           console.log('subscriptionData', subscriptionData)
          // if(!subscriptionData.data.newMessage)
          //   return prev;
          // const newMessage = subscriptionData.data.newMessage;
          // console.log('data coming from subscription', newMessage);
          // return {
          //   ...prev,
          //   entry: {
          //     chat: [newMessage, ...prev.entry.newMessage]
          //   }
          // }  
        },
        onError: err => console.error('Error in subscription', err)
      })
    }

    sendMessage(): Observable<any>{
      let conversation: ChatSupportInterface = {
        dateReceived: Date.now().toString(),
        message: "Initial Message"
      }
      
      return this.apollo.mutate({
        mutation: this.messageMutations.SEND_MESSAGE,
        variables:{
          message: conversation
        },
      })
    }
}
