import { Component, OnInit } from '@angular/core';
import {CarapiconnectService}  from '../../../Service/carapiconnect.service';
import { LaunchedCars } from 'src/app/Model/LaunchedCars';

@Component({
  selector: 'app-launched',
  templateUrl: './launched.component.html',
  styleUrls: ['./launched.component.css']
})
export class LaunchedComponent implements OnInit {
listOfItems: LaunchedCars[];
accessPointURL="http://localhost:49345/api/featured/GetLaunchedCars";

  constructor(private _carapiconnectservice: CarapiconnectService) {
  }

  ngOnInit() {
    this._carapiconnectservice.getCars(this.accessPointURL).subscribe((launchedcars) =>{
      this.listOfItems = launchedcars;
    });
  }

}
