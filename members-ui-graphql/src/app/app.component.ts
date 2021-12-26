import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService } from './shared/service/web-socket/web-socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public constructor(private router: Router
    ){

  }

  ngOnInit(){
    
  }
}
