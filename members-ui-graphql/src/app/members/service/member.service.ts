import { Injectable } from '@angular/core';
import { Apollo} from 'apollo-angular';
import { Observable } from 'rxjs';
import { MemberInterface } from '../member-interface';
import { MembersQueries } from '../../graphql/queries/members-queries';
import { MembersMutations } from 'src/app/graphql/mutations/members-mutations';

@Injectable({
  providedIn: 'root'
})


export class MemberService {
  constructor(private apollo: Apollo, 
    private membersQueries: MembersQueries,
    private membersMutations: MembersMutations) { }

  createMember(member: MemberInterface): Observable<any>{
    return this.apollo.mutate({
      mutation: this.membersMutations.CREATE_MEMBER,
      refetchQueries: [{
        query: this.membersQueries.GET_MEMBERS
      }],
      variables:{
        member: member
      }
    });
  }

  getMembers():Observable<any>{
    return this.apollo.watchQuery({
      query: this.membersQueries.GET_MEMBERS
    }).valueChanges;
  }
  
  getMemberById(id: string): Observable<any>{
    return this.apollo.watchQuery({
      query: this.membersQueries.GET_MEMBER_BY_ID,
      variables:{
        id: id
      }
    }).valueChanges;
  }

  deleteMember(id: string): Observable<any>{
    return this.apollo.mutate({
      mutation: this.membersMutations.DELETE_MEMBER,
      refetchQueries: [{
        query: this.membersQueries.GET_MEMBERS
      }],
      variables: {
        idInput: id
      }
    })
  }

}
