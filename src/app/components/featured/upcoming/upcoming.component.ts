import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CarapiconnectService } from '../../../Service/carapiconnect.service';
import { UpcomingCars } from 'src/app/Model/UpcomingCars';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpcomingComponent implements OnInit {
  listOfItems: UpcomingCars[];
  selectedItem: any;
  constructor(private _carapiconnectService: CarapiconnectService) {
    // this.listOfItems = [{title: 'Land Rover  New Range Rover Evoque', price:'53 - 70 Lakhs', date: 'Jun 2019', image :"https://imgd.aeplcdn.com/310x174/cw/ec/37721/Land-Rover-New-Range-Rover-Evoque-Exterior-145496.jpg?wm=0&q=85"}
    // , {title: 'MG  Hector', price:'18 - 23 Lakhs', date: '6th April 2018', image :"https://imgd.aeplcdn.com/310x174/cw/ec/36756/MG-Hector-Exterior-145971.jpg?wm=0&q=85"}
    // , {title: 'Maruti Suzuki New Vitara Brezza', price:'8 - 9 Lakhs', date: 'Jun 2019', image :"https://imgd.aeplcdn.com/310x174/cw/ec/39028/Maruti-Suzuki-New-Vitara-Brezza-Exterior-152362.jpg?wm=0&q=85"}]
    this._carapiconnectService.get().subscribe(listOfItems => this.listOfItems = listOfItems);
    console.log(this.listOfItems);
  }

  ngOnInit() {
  }
}
