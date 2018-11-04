import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  add_article: boolean = false;
  your_articles: boolean = false;

  constructor() {  }

  ngOnInit() {    
    this.jquery_code();
  }

  jquery_code(){
 
        $(document).ready(function(){
          $('.slider').slider();
        });

        // $(document).ready(function() {
        //   $('select').material_select();
        // });
  }

  YourArticles(){
    this.add_article = false;  
    this.your_articles = true;
  }

  addArticle(){      
  this.your_articles =false;    
  this.add_article = true;    

  }
}
