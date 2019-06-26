import { Component, OnInit } from '@angular/core';
import { CarapiconnectService } from 'src/app/Service/carapiconnect.service';

@Component({
  selector: 'app-locatedealer',
  templateUrl: './locatedealer.component.html',
  styleUrls: ['./locatedealer.component.css']
})
export class LocatedealerComponent implements OnInit {
dealerList:string[];
accesspointURL="http://localhost:49345/api/Dealer/GetDealers";

  constructor(private _carapiconnectservices: CarapiconnectService) { }

  ngOnInit() {
    this._carapiconnectservices.getCars(this.accesspointURL).subscribe((dealerList)=>{
      this.dealerList = dealerList;
    });
  }

}
