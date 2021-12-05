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

//Apollo
import { APOLLO_OPTIONS } from 'apollo-angular/';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

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
  providers: [ { useClass: APIInterceptor, multi: true, provide: HTTP_INTERCEPTORS },
   {
     provide: APOLLO_OPTIONS,
     useFactory: (httpLink: HttpLink) => {
       return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "https://backend-js.azurewebsites.net/graphql"
        })
       };
     },
     deps: [HttpLink]
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
