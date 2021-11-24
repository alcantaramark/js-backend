import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule }  from '@angular/material/grid-list';


import { MemberListComponent } from './member-list/member-list.component';
import { MembersRoutingModule } from './../members/members-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberHomeComponent } from './member-home/member-home.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberProfileComponent,
    MemberHomeComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MembersRoutingModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    MemberListComponent
  ]
})
export class MembersModule { }
