import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillsHomeComponent } from './skills-home/skills-home.component';

const routes: Routes = [
    { 
      path: '', component: SkillsHomeComponent, 
      children: 
      [
        { path: 'skills-list', component: SkillListComponent },
        { path: '', redirectTo: 'skills-list', pathMatch: 'full' },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
