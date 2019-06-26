import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carheader',
  templateUrl: './carheader.component.html',
  styleUrls: ['./carheader.component.css']
})
export class CarheaderComponent implements OnInit {
carName: string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.carName = params.name
    });
  }

}
