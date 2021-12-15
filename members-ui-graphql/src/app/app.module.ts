//Default Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

//Feature Modules
import { MembersModule } from './members/members.module';
import { SharedModule } from './shared/shared.module';

//Apollo
import { APOLLO_OPTIONS } from 'apollo-angular/';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink, split } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';


//Environment
import { API_URL, SUBSCRIPTION_URL } from 'src/environments/environment';

//add-ons
import { from } from 'rxjs';
import { LoaderService } from './shared/service/loader/loader.service';

export function intercept(loaderService: LoaderService
        , httpLink: HttpLink){
    const http = httpLink.create({ uri: API_URL });

    const ws = new WebSocketLink({
      uri: `ws://localhost:8080/graphql`,
      options: { reconnect: true,
        
      }
    });      


    const conditionalLink = split(
      ({ query }) => {
        let definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      ws,
      http
    );

    const middleware = new ApolloLink((operation, forward) => {
       const token = '=======test token only=======';
       console.log('Http requests in progress');
       loaderService.isLoading.next(true);
       operation.setContext({
         headers: new HttpHeaders().set('Authorization', `Bearer ${ token || null}`)
       });
       return forward(operation).map(response => {
         loaderService.isLoading.next(false); 
         return response;
       });
    })

    const error = onError(({ networkError }) => {
     console.error('Http requests resulted in an error');
    })

    const link = ApolloLink.from([middleware.concat(http)
     , error.concat(http)
     , conditionalLink
   ])

    return {
     cache: new InMemoryCache(),
     link,
     defaultOptions: {
       watchQuery: {
         fetchPolicy: 'network-only',
         errorPolicy: 'all'
       }
     }
    };
}

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
  providers: [
   {
     provide: APOLLO_OPTIONS,
     useFactory: intercept,
     deps: [LoaderService, HttpLink]
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
