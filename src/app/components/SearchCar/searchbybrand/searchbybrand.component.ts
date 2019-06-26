import { Component, OnInit, NgModule } from '@angular/core';
import { CarapiconnectService } from 'src/app/Service/carapiconnect.service';
import { RouterModule} from '@angular/router';

@NgModule({
  imports:[RouterModule]
})

@Component({
  selector: 'app-searchbybrand',
  templateUrl: './searchbybrand.component.html',
  styleUrls: ['./searchbybrand.component.css']
})
export class SearchbybrandComponent implements OnInit {
brandsList:string[];
accessURL = "http://localhost:49345/api/Brand/GetBrands";

  constructor(private _carapiconnectservice: CarapiconnectService) { }

  ngOnInit() {
    this._carapiconnectservice.getCars(this.accessURL).subscribe((brands)=>{
      this.brandsList = brands;
    });
  }

}
exports: [RouterModule]
