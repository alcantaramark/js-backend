import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberUpdateComponent } from './member-update/member-update.component';

const routes = [
  { path: '', component: MemberHomeComponent,
    children: 
      [
        { path: 'members-list', component: MemberListComponent },
        { path: 'member-add', component: MemberAddComponent },
        { path: 'member-update/:id', component: MemberUpdateComponent},
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
