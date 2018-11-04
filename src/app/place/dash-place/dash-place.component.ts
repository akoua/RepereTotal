import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-dash-place',
  templateUrl: './dash-place.component.html',
  styleUrls: ['./dash-place.component.css']
})
export class DashPlaceComponent implements OnInit {

  private nb = ['rien', 'boao', 'lsso','lkslsl'] ;

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code(){
 
        $(document).ready(function(){
          $('.slider').slider();
        });
  }

}
