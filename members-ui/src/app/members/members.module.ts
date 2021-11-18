import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MemberListComponent } from './member-list/member-list.component';
import { MembersRoutingModule } from './../members/members-routing.module';



@NgModule({
  declarations: [
    MemberListComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MembersRoutingModule
  ],
  exports: [
    MemberListComponent
  ]
})
export class MembersModule { }
