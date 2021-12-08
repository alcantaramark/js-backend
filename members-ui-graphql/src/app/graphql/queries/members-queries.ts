import { Injectable } from "@angular/core";
import { gql } from "@apollo/client/core"

@Injectable({
    providedIn: 'root'
})

export class MembersQueries {
    GET_MEMBERS = gql`
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
    }`;

    GET_MEMBER_BY_ID = gql`
      query Members($id: ID){
        getMemberById(id: $id){
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
    `
    
}
