import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UpcomingCars} from '../Model/UpcomingCars';
import {UpcomingCarsNew} from '../Model/upcomingCarsNew';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class CarapiconnectService {

private accessPointURL: string ="http://localhost:49345/api/cars/GetUpcomingCars";
private accessPointURL1: string ="http://localhost:49345/api/cars/GetUpcomingCar";
//upcomingcars: UpcomingCars[];

  constructor(private http: HttpClient) { 
  }

  //public getCars():UpcomingCars[]
  public getCars()
  {

    // this.upcomingcars = 
    // [
    //     {Name: "breeza", ImageURL: "https://imgd.aeplcdn.com/310x174/cw/ec/39028/Maruti-Suzuki-New-Vitara-Brezza-Exterior-152362.jpg?wm=0&q=85", LaunchDate: "April 2019", Price: "22 Lakhs"}
    // ];
    // return this.upcomingcars;

    //var obj = this.http.get<UpcomingCarsNew[]>(this.accessPointURL);
    var obj = this.http.get<any[]>(this.accessPointURL);
    console.log(obj);
    return obj;
  }
  public getcar()
  {
    var obj1 = this.http.get(this.accessPointURL1);
    console.log(obj1);
    return obj1;
  }

}
