import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { RouterModule } from '@angular/router';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberHomeComponent } from './member-home/member-home.component';

const routes = [
  { path: '', component: MemberHomeComponent,
    children: 
      [
        { path: 'members-list', component: MemberListComponent },
        { path: 'member-profile', component: MemberProfileComponent },
        { path: '', redirectTo: 'members-list', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MembersRoutingModule { }
