import { Component, OnInit } from '@angular/core';
import {CarapiconnectService} from '../../../Service/carapiconnect.service';
import { LaunchedCars } from 'src/app/Model/LaunchedCars';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  listOfItems: LaunchedCars[];
  accessPointURL="http://localhost:49345/api/featured/GetPopularCars";
  
  constructor(private _carapiconnectService: CarapiconnectService) {
  }

  ngOnInit() {
    this._carapiconnectService.getCars(this.accessPointURL).subscribe((popularcars) =>
    {
      this.listOfItems = popularcars;
    });
  }

}
