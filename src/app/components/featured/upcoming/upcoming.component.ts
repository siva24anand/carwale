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
    
     //this._carapiconnectService.getCars().subscribe(listOfItemsfromService => this.listOfItems = listOfItemsfromService);
     this._carapiconnectService.getCars().subscribe((listOfItemsfromService:UpcomingCars[])  => 
     {
       this.listOfItems = listOfItemsfromService
     });
     console.log(this.listOfItems);
  }

  ngOnInit() {
    //this.listOfItems = this._carapiconnectService.getCars();
  }
  
}
