import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-your-articles',
  templateUrl: './your-articles.component.html',
  styleUrls: ['./your-articles.component.css']
})
export class YourArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code(){
    $(document).ready(() => {
      $('select').material_select();
    });

    $(".dropdown-button").dropdown();
  }

}
