import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {UpcomingCars} from '../Model/UpcomingCars';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CarapiconnectService {

private accessPointURL: string ="http://localhost:49345/api/cars";
upcomingcars: UpcomingCars[];

  constructor(private http: HttpClient) { 
  }
  public get():Observable<UpcomingCars[]>
  {
    // return [
    //     {Name: "breeza", ImageURL: "https://imgd.aeplcdn.com/310x174/cw/ec/39028/Maruti-Suzuki-New-Vitara-Brezza-Exterior-152362.jpg?wm=0&q=85", LaunchDate: "April 2019", Price: "22 Lakhs"}
    // ];
    // return this.http.get(this.accessPointURL,{headers:this.headers}).
    // subscribe(cars=>{this.upcomingcars = cars as UpcomingCars[]});
    var obj = this.http.get<UpcomingCars[]>(this.accessPointURL);
    console.log(obj);
    return obj;
    //return this.http.get<UpcomingCars[]>(this.accessPointURL);
  }
}
