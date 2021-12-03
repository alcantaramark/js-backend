import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { MemberInterface } from '../member-interface';
import { API_URL } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any>{
    return this.http.get(`${ API_URL }members`).pipe(
      catchError(e => { throw 'error in member service: ' + JSON.stringify(e) })
    );
  }

  saveNewMember(newMember: MemberInterface): Observable<MemberInterface>{
    return this.http.post<MemberInterface>(`${ API_URL }members`, newMember)
      .pipe(
        retry(2)
      );
  }

  deleteMember(id: string): Observable<string>{
    return this.http.delete<string>(`${ API_URL }members/${id}`)
      .pipe(
        retry(2)
      );
  }
}
