import { Injectable } from '@angular/core';
import { Apollo} from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MemberService {
  private GET_MEMBERS = gql`
    query getAllMembers{
        getAllMembers{
        id
        firstName
        lastName
        email
        jobTitle
        profilePicture
        profileDescription
        skills{
          id
          name
        }
      }  
    }
  `;

  constructor(private apollo: Apollo) { }

  getMembers():Observable<any>{
    return this.apollo.watchQuery({
      query: this.GET_MEMBERS,
      notifyOnNetworkStatusChange: false
    }).valueChanges;
  }
}
