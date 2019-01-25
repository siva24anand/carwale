import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launched',
  templateUrl: './launched.component.html',
  styleUrls: ['./launched.component.css']
})
export class LaunchedComponent implements OnInit {

  listOfItems: any[];
  selectedItem: any;
  constructor() {
    //this.listOfItems = [{name: 'name01'}, {name: 'name02'}, {name: 'name03'},{name: 'name01'}, {name: 'name02'}, {name: 'name03'},{name: 'name01'}, {name: 'name02'}, {name: 'name03'}]
    this.listOfItems = [{name: 'name01'}, {name: 'name02'}, {name: 'name03'}]
  }

  ngOnInit() {
  }

}
