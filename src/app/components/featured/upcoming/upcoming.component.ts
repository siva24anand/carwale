import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpcomingComponent implements OnInit {
  listOfItems: any[];
  selectedItem: any;
  constructor() {
    this.listOfItems = [{name: 'name01'}, {name: 'name02'}, {name: 'name03'},{name: 'name01'}, {name: 'name02'}, {name: 'name03'},{name: 'name01'}, {name: 'name02'}, {name: 'name03'}]
    //this.listOfItems = [{name: 'name01'}, {name: 'name02'}, {name: 'name03'}]
  }

  ngOnInit() {
  }
}
