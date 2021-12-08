import { Injectable } from "@angular/core";
import { gql } from "@apollo/client/core";

@Injectable({
    providedIn: 'root'
})

export class MembersMutations {
    DELETE_MEMBER = gql`
    mutation deleteMember($idInput: ID){
      deleteMember(id: $idInput)
  }`

   CREATE_MEMBER = gql`
    mutation createMember($member: MemberInput){
       createMember(member: $member){
         _id
       }
    }`
}
