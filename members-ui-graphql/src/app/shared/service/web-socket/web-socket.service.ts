import { Injectable } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import { BASE_API_URL, SUBSCRIPTION_ACCESS_KEY, SUBSCRIPTION_HUB_NAME, SUBSCRIPTION_URL } from "src/environments/environment";



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
 
  constructor() {
    console.log('connecting to SignalR');
    
    const connection = new SignalR.HubConnectionBuilder()
          .configureLogging(SignalR.LogLevel.Debug)
          .withUrl(`https://backend-js-functionapp.azurewebsites.net/api`, {
            skipNegotiation: false,
            transport: SignalR.HttpTransportType.WebSockets,
          })
          .build();
    
    connection.start().then(() =>{ 
             console.log('SignalR Connected!');
             connection.on('NewMessage', () => console.log('Messaged Received'));
             connection.send("NewMessage", { message: "Hello"});
             
          })
          .catch(e => console.error('Error connecting to SignalR Web Socket', e));

  }
}
 

