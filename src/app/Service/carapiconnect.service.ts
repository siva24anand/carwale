import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarapiconnectService {

  constructor(private http: HttpClient) { 
  }

  public getCars(accessPointURL:string)
  {
    var obj = this.http.get<any[]>(accessPointURL);
    return obj;
  }
}
