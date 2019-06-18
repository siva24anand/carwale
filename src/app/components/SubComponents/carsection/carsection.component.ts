import { Component, OnInit } from '@angular/core';
import { LaunchedCars } from 'src/app/Model/LaunchedCars';
import { CarapiconnectService } from 'src/app/Service/carapiconnect.service';

@Component({
  selector: 'app-carsection',
  templateUrl: './carsection.component.html',
  styleUrls: ['./carsection.component.css']
})
export class CarsectionComponent implements OnInit {

  availableCars: LaunchedCars[];
  accessPointURL = "http://localhost:49345/api/featured/GetAvailableCars";

  constructor(private _carapiconnectservice: CarapiconnectService) { }

  ngOnInit() {
    this._carapiconnectservice.getCars(this.accessPointURL).subscribe((availableCars) =>{
      this.availableCars = availableCars.filter(a=>a.brand == "MarutiSuzuki")
    });
  }

}
