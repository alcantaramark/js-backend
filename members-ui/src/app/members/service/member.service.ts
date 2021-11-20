import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { API_URL } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any>{
    return this.http.get(`${ API_URL }members`).pipe(
      catchError(e => { throw 'error in service: ' + JSON.stringify(e) })
    );
  }
}
