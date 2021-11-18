import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [
    { path: 'skills', component: SkillListComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
