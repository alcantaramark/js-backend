import { Injectable } from '@angular/core';
import { API_URL } from './../../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private GET_SKILLS = gql`query Skills{
    getAllSkills{
      _id
      name
    }
  }`;

  constructor(private apollo: Apollo) { }

  getSkills(): Observable<any>{
    return this.apollo.watchQuery({
      query: this.GET_SKILLS,
    }).valueChanges;
  }
}
