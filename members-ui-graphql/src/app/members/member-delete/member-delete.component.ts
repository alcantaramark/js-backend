import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.scss']
})
export class MemberDeleteComponent implements OnInit {
  constructor(private memberService: MemberService
    , private commonService: CommonService
    , private router: Router
    , @Inject(MAT_DIALOG_DATA) public data: { id: string, name: string }) { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

  ngOnInit(): void {

  }

  deleteMember(){
    this.memberService.deleteMember(this.data.id).subscribe({next: ()=> {
        this.commonService.displayMessage(`Member successfully deleted`, `Dismiss`);
        this.router.navigate(['members-list']);
      }, error: (e) => console.error(`Error deleting member ${this.data.name}`, e)
    })
  }
}
