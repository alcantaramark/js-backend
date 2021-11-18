import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './members/member-list/member-list.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';

const routes: Routes = [
  {
    path: 'members', component: MemberListComponent,
    children: []
  },
  {
    path: 'skills', component: SkillListComponent
  },
  {
    path: '**', redirectTo: 'members'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
