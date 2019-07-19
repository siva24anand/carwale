import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-versionheader',
  templateUrl: './versionheader.component.html',
  styleUrls: ['./versionheader.component.css']
})
export class VersionheaderComponent implements OnInit {
carName:string
totalreviews:number = 311;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>
    {
      this.carName = params.name;
    });
  }

}
