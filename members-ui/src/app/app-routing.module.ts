import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberListComponent } from './members/member-list/member-list.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'members' },
  { path: 'members', component: MemberListComponent },
  { path: 'skills', component: SkillListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
