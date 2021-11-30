import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './../../../environments/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any>{
    return this.http.get(`${ API_URL }skills`).pipe(
      catchError(e => { throw 'error in skill service: ' + JSON.stringify(e) })
    );
  }
}
