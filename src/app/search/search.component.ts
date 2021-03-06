import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl();

    constructor() { }

    ngOnInit() {
      this.searchControl.valueChanges.subscribe(value => {
        // do search with value here
        console.log(value);
      });
    }

}
