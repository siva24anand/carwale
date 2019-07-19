import { Component, OnInit } from '@angular/core';
import { CarapiconnectService } from 'src/app/Service/carapiconnect.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locatedealer',
  templateUrl: './locatedealer.component.html',
  styleUrls: ['./locatedealer.component.css']
})
export class LocatedealerComponent implements OnInit {
  brandName: any;
  dealerList: string[];
  accesspointURL = "http://localhost:49345/api/Dealer/GetDealers";

  constructor(private _carapiconnectservices: CarapiconnectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.brandName = params.name;
      this.accesspointURL = this.accesspointURL + '?brandName='+this.brandName;
      this._carapiconnectservices.getCars(this.accesspointURL).subscribe((dealerList) => {
        this.dealerList = dealerList;
      });
    });
  }

}
