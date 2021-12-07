import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { MemberDeleteComponent } from '../member-delete/member-delete.component';
import { MemberInterface } from '../member-interface';
import { MemberService } from './../service/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})


export class MemberListComponent implements OnInit {
  members: MemberInterface[] = new Array(); 
  
  constructor(private memberService: MemberService
    , private commonService: CommonService
    , public router: Router) {
      this.memberService.getMembers().subscribe({
        next: res => {
          console.log("Successfully received members data", res)
          this.members = res.data.getAllMembers
        }
      });    
  }

  ngOnInit(): void {
    
  }

  confirmDelete(member: MemberInterface){
    this.commonService.showDialog(MemberDeleteComponent, 
      { id: member._id, name: `${ member.firstName } ${member.lastName}`});
  }
}
