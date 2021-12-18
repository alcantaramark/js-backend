import { Injectable } from "@angular/core";
import { gql } from '@apollo/client/core';

@Injectable({providedIn: 'root'})

export class MessageSubscriptions{
    NEW_MESSAGE = gql`subscription Chat{
        newMessage{
            dateReceived
            message
        }
    }`
}