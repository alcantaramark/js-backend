import { Injectable } from '@angular/core';
import { API_URL } from './../../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { SkillsQueries } from 'src/app/graphql/queries/skills-queries';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  constructor(private apollo: Apollo,
    private skillsQueries: SkillsQueries) { }

  getSkills(): Observable<any>{
    return this.apollo.watchQuery({
      query: this.skillsQueries.GET_SKILLS,
    }).valueChanges;
  }
}
