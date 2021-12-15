import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common/common.service';
import { LoaderService } from '../service/loader/loader.service';
import { ChatSupportComponent } from './../chat-support/chat-support.component'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  constructor(public loaderService: LoaderService
    , public router: Router
    , private commonService: CommonService) { }

  ngOnInit(): void {
  }

  openChatSupport(){
    this.commonService.showDialog(ChatSupportComponent, { 
      hasBackdrop: false
      , width: '350px'
      , height: '500px'
      , disableClose: false
      , position: { 
          bottom: '65px',
          right: '100px'
        }
     })
  }
}
