import { Injectable } from "@angular/core";
import { gql  } from "@apollo/client/core";

@Injectable({
    providedIn: 'root'
})

export class SkillsQueries {
    GET_SKILLS = gql`query Skills{
        getAllSkills{
          _id
          name
        }
      }`;
}
