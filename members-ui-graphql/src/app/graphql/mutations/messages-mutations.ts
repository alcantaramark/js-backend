import { Injectable } from "@angular/core";
import { gql } from "@apollo/client/core";

@Injectable({providedIn: 'root'})
export class MessagesMutations{
    SEND_MESSAGE = gql`mutation($message: ConversationInput){
        newMessage(conversation: $message){
            dateReceived
            message
        }
    }`
}