import { Injectable } from '@angular/core';
import { Apollo} from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { MemberInterface } from '../member-interface';

@Injectable({
  providedIn: 'root'
})


export class MemberService {
  private DELETE_MEMBER = gql`
    mutation deleteMember($idInput: ID){
      deleteMember(id: $idInput)
  }`

  private CREATE_MEMBER = gql`
    mutation createMember($member: MemberInput){
       createMember(member: $member){
         _id
       }
    }`

  private GET_MEMBERS = gql`
    query Members{
        getAllMembers{
        _id
        firstName
        lastName
        email
        jobTitle
        profilePicture
        profileDescription
        skills{
          _id
          name
        }
      }  
    }
  `;

  constructor(private apollo: Apollo) { }

  createMember(member: MemberInterface): Observable<any>{
    return this.apollo.mutate({
      mutation: this.CREATE_MEMBER,
      variables:{
        member: member
      }
    });
  }

  getMembers():Observable<any>{
    return this.apollo.watchQuery({
      query: this.GET_MEMBERS,
      notifyOnNetworkStatusChange: false
    }).valueChanges;
  }
  
  deleteMember(id: string): Observable<any>{
    return this.apollo.mutate({
      mutation: this.DELETE_MEMBER,
      variables: {
        idInput: id
      }
    })
  }

}
