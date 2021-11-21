import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule }  from '@angular/material/grid-list';


import { MemberListComponent } from './member-list/member-list.component';
import { MembersRoutingModule } from './../members/members-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MemberListComponent
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
    FlexLayoutModule
  ],
  exports: [
    MemberListComponent
  ]
})
export class MembersModule { }
