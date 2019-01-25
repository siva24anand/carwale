import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  listOfItems: any[];
  selectedItem: any;
  constructor() {
    //this.listOfItems = [{name: 'name01'}, {name: 'name02'}, {name: 'name03'},{name: 'name01'}, {name: 'name02'}, {name: 'name03'},{name: 'name01'}, {name: 'name02'}, {name: 'name03'}]
    this.listOfItems = [{name: 'name01'}, {name: 'name02'}, {name: 'name03'}]
  }

  ngOnInit() {
  }

}
