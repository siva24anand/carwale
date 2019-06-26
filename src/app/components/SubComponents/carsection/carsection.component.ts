import { Component, OnInit } from '@angular/core';
import { LaunchedCars } from 'src/app/Model/LaunchedCars';
import { CarapiconnectService } from 'src/app/Service/carapiconnect.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carsection',
  templateUrl: './carsection.component.html',
  styleUrls: ['./carsection.component.css']
})
export class CarsectionComponent implements OnInit {
  carName: any;
  availableCars: LaunchedCars[];
  accessPointURL = "http://localhost:49345/api/featured/GetAvailableCars";

  constructor(private _carapiconnectservice: CarapiconnectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.carName = params.name;
      this._carapiconnectservice.getCars(this.accessPointURL).subscribe((availableCars) => {
        this.availableCars = availableCars.filter(a => a.brand == this.carName)
      });
    });
  }

}
