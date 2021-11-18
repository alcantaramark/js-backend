//Default Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Main Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

//Materials import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'


//Custom modules
import { MembersModule } from './members/members.module';
import { MembersRoutingModule } from './members/members-routing.module';
import { SkillsRoutingModule } from './skills/skills-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MembersModule,
    MatSidenavModule,
    MembersRoutingModule,
    SkillsRoutingModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
