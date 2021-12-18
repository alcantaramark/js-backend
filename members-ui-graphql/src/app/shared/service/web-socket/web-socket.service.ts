import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import { connect } from 'http2';
import { BASE_API_URL } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { 
    console.log('connecting to SignalR');
    const connection = new SignalR.HubConnectionBuilder()
          .configureLogging(SignalR.LogLevel.Information)
          .withUrl('https://backend-js.azurewebsites.net/graphql/', {
            skipNegotiation: true,
            transport: 1
          })
          .build();
    
    connection.start().then(() => console.log('SignalR Connected! 🚀🚀🚀'))
          .catch(e => console.error('Error connecting to SignalR Web Socket', e));
  }
}
