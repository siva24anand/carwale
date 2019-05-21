import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CarapiconnectService } from '../../../Service/carapiconnect.service';
import { UpcomingCars } from 'src/app/Model/UpcomingCars';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class UpcomingComponent implements OnInit {
  listOfItems: UpcomingCars[];
  accessPointURL="http://localhost:49345/api/featured/GetUpcomingCars";

  constructor(private _carapiconnectService: CarapiconnectService) {
  }

  ngOnInit() {
    this._carapiconnectService.getCars(this.accessPointURL).subscribe((listOfItemsfromService)  => 
    {
     this.listOfItems = listOfItemsfromService;
    });
  }

}
