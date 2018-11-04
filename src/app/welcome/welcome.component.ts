import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $ : any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isConnect: boolean = false;
  idSideBar: string = "slide-out";

  //pour maintenir la Sidebar même en cas de rafraichissement il faut tenir compte de la conno

  constructor(private route: Router) { }

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code(){
    $('.btn-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { },       
      onClose: function(el) { },
    }
  );
  }

  connexion(event){
    //après la verif de 0Auth
    console.log(event);
    this.isConnect = true;    
   this.route.navigateByUrl('/yourArticles');
  }

}