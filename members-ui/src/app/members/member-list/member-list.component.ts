import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MemberInterface } from '../member-interface';
import { MemberService } from './../service/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})


export class MemberListComponent implements OnInit {
  constructor(private memberService: MemberService) { 
    
    this.memberService.getMembers().subscribe(res => {
      console.log('Members', JSON.stringify(res));
    });
  }

  ngOnInit(): void {
    
  }

  

}
