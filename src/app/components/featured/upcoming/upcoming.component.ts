import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import {CarapiconnectService } from '../../../Service/carapiconnect.service';
import { UpcomingCars } from 'src/app/Model/UpcomingCars';
import { UpcomingCarsNew } from 'src/app/Model/upcomingCarsNew';
import { List } from 'lodash';
import { strictEqual } from 'assert';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UpcomingComponent implements OnInit {
  listOfItems: UpcomingCarsNew[];
  caritem:UpcomingCarsNew;
  caritemarray:UpcomingCarsNew[];
  caritemarray1= [];
  str:string;
  
  constructor(private _carapiconnectService: CarapiconnectService,private ngZone:NgZone) {

      this._carapiconnectService.getCars().subscribe((listOfItemsfromService)  => 
     {
      console.log(listOfItemsfromService);
      //console.log(Json.parse(listOfItemsfromService));
this.ngZone.run(()=>{
  this.listOfItems = <UpcomingCarsNew[]>listOfItemsfromService;
  this.str= "in subscriber";
});
      console.log(this.str);
       console.log(this.listOfItems);
       //this.caritemarray1 = listOfItemsfromService.UpcomingCar;
       //console.log(this.caritemarray1);
     });
       console.log(this.listOfItems);
       console.log(this.str);

    //  this.caritemarray = 
    // [
    //     {Name: "breeza", ImageURL: "https://imgd.aeplcdn.com/310x174/cw/ec/39028/Maruti-Suzuki-New-Vitara-Brezza-Exterior-152362.jpg?wm=0&q=85", LaunchDate: "April 2019", Price: "22 Lakhs", Brand: "Maruti", Type: ""}
    //     ,{Name:"Land Rover  New Range Rover Evoque",Price :"53 - 70 Lakhs", LaunchDate : "Jun 2019", ImageURL :"https://imgd.aeplcdn.com/310x174/cw/ec/37721/Land-Rover-New-Range-Rover-Evoque-Exterior-145496.jpg?wm=0&q=85", Brand :"Land Rover", Type :"SUV" }
    // ];
    // console.log(this.caritemarray);

    // this._carapiconnectService.getcar().subscribe((car) =>
    // {
    //   console.log(car);
    //   this.caritem = <UpcomingCarsNew>car;
    //   console.log(this.caritem);
    // });
  }

  ngOnInit() {
    //this.listOfItems = this._carapiconnectService.getCars();
  }

  GetListItemArray(listItems:List<UpcomingCarsNew>) {
    var arrayList:UpcomingCarsNew[];
    
  }
}
