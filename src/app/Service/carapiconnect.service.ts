import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {UpcomingCars} from '../Model/UpcomingCars';
import {UpcomingCarsNew} from '../Model/upcomingCarsNew';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class CarapiconnectService {

private accessPointURL: string ="http://localhost:49345/api/cars";
private accessPointURL1: string ="http://localhost:49345/api/values";
upcomingcars: UpcomingCars[];

  constructor(private http: HttpClient) { 
  }

  //public getCars():UpcomingCars[]
  public getCars():Observable<UpcomingCars[]>
  {

    // this.upcomingcars = 
    // [
    //     {Name: "breeza", ImageURL: "https://imgd.aeplcdn.com/310x174/cw/ec/39028/Maruti-Suzuki-New-Vitara-Brezza-Exterior-152362.jpg?wm=0&q=85", LaunchDate: "April 2019", Price: "22 Lakhs"}
    // ];
    // return this.upcomingcars;

    var obj = this.http.get<UpcomingCars[]>(this.accessPointURL);
    var obj1 = this.http.get(this.accessPointURL1);

    console.log(obj);
    console.log(obj1);
    return obj;
    
  }
  
  

}
