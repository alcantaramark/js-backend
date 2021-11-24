import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillsHomeComponent } from './skills-home/skills-home.component';


@NgModule({
  declarations: [
    SkillListComponent,
    SkillsHomeComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    RouterModule
  ]
})
export class SkillsModule { }
