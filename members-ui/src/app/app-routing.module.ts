import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { 
    path: 'members',
    loadChildren: () => import('./members/members.module').then(members => members.MembersModule)
  },
  { 
    path: 'skills', 
    loadChildren: () => import('./skills/skills.module').then(skills => skills.SkillsModule)
  },
  { path: '**', redirectTo: 'members' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
