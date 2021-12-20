import { Injectable } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import { connect } from 'http2';
import { BASE_API_URL, SUBSCRIPTION_ACCESS_KEY } from "src/environments/environment";
import * as jwt from "jsonwebtoken";


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
 
  constructor() {
    console.log('connecting to SignalR');
    
    const connection = new SignalR.HubConnectionBuilder()
          .configureLogging(SignalR.LogLevel.Debug)
          .withUrl('https://backend-js.service.signalr.net/client/?hub=graphql', {
            skipNegotiation: false,
            transport: SignalR.HttpTransportType.WebSockets,
            accessTokenFactory: () => {
              const payload: JwtPayload = {
                aud: 'https://backend-js.service.signalr.net/client/?hub=graphql',
                iat: Math.floor(Date.now() / 1000) - 30,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
              };
              
              
              //var jt = require('jsonwebtoken')
             
              //const accessToken = jwt.sign(JSON.stringify(payload), SUBSCRIPTION_ACCESS_KEY);
              // /alert(accessToken);
              return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2JhY2tlbmQtanMuc2VydmljZS5zaWduYWxyLm5ldC9jbGllbnQvP2h1Yj1ncmFwaHFsIiwiaWF0IjoxNjM5OTE0MjA0LCJleHAiOjE2NDAwMDA2MzR9.Lo-chxT92BFfkhbGOPpXNZhf4iJWWlkYUv2m343U4Ps";
            }
          })
          .build();
    
    connection.start().then(() => console.log('SignalR Connected!'))
          .catch(e => console.error('Error connecting to SignalR Web Socket', e));
    connection.on("NEW_MESSAGE", () => console.log('new message'));
    
  }

  private generateAccessToken(url: string, userId?: string) {
    
    const payload: JwtPayload = {
      aud: url,
      iat: Math.floor(Date.now() / 1000) - 30,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    };
    if (userId) {
      payload.nameid = userId;
    }

    let jt = require('jsonwebtoken');
    const accessToken = jt.sign(payload, SUBSCRIPTION_ACCESS_KEY);
    
    return accessToken;
  }
}

interface JwtPayload {
  aud: string;
  iat: number;
  exp: number;
  nameid?: string;
}

