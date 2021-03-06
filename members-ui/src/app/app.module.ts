//Default Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Feature Modules
import { MembersModule } from './members/members.module';
import { SharedModule } from './shared/shared.module';
import { APIInterceptor } from './shared/service/interceptor/api.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MembersModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ { useClass: APIInterceptor, multi: true, provide: HTTP_INTERCEPTORS } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
