import { Injectable } from "@angular/core";
import { gql } from "@apollo/client/core";

@Injectable({ providedIn: 'root'})

export class MessageQueries {
    GET_MESSAGE = gql`query Message{
        newMessage{
            message
            dateReceived
        }
    }`
}
