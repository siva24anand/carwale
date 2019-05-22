import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string,accesspPointURL:string ) {
    return this.http.post<any>(accesspPointURL,{username,password})
    .pipe(map(user=>{
      if(user && user.token)
      {
        localStorage.setItem('TokenInfo', JSON.stringify(user));
      }
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('TokenInfo');
  }
}
