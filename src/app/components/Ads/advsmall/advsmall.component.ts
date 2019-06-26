import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advsmall',
  templateUrl: './advsmall.component.html',
  styleUrls: ['./advsmall.component.css']
})
export class AdvsmallComponent implements OnInit {
   imgURL = "";
   randomstring = Math.random().toString(36).substring(2, 15);
  constructor() { }

  ngOnInit() {
    this.imgURL = "http://localhost:49345/api/image/GetAdImage?size=small&time="+ this.randomstring;
  }
}
