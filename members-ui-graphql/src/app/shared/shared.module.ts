import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';

//Material Components
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  providers:[],
  declarations: [
    HeaderNavComponent,
    FooterComponent,
    ChatSupportComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule
  ],
  exports: [ HeaderNavComponent, FooterComponent ]
})
export class SharedModule { }
