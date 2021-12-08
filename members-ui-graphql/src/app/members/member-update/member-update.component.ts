import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.scss']
})
export class MemberUpdateComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, 
    private memberService: MemberService,
    private commonService: CommonService) { 
    
      this.route.params.subscribe(params => {
        let memberId = params['id'];
        if(memberId)
          this.memberService.getMemberById(params['id']).subscribe({
            next: res => console.log(`Getting member by id: ${memberId}`, res),
            error: e => console.error(`Error getting member by id`, e)
          })
        else
          this.commonService.displayMessage(`Member Id not specified`, `Dismiss`);
    })
  }

  ngOnInit(): void {
  }

}
