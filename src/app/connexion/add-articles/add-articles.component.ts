import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code(){
    $(document).ready(() => {
      $('select').material_select();
    });
  }

}
