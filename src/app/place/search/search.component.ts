import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code(){

    $(document).ready(function() {
      $('select').material_select();
    });
  }
}
