import { Component, OnInit } from '@angular/core';


declare let $: any;

@Component({
  selector: 'app-your-services',
  templateUrl: './your-services.component.html',
  styleUrls: ['./your-services.component.css']
})
export class YourServicesComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
    this.jquery_code();    
  }

  jquery_code() {

    $(document).ready(() => {
      $('select').material_select();
    });
    
  }

  toggleService(event) {
    console.log(event.toElement.innerText.toLowerCase());
    if (event.toElement.innerText.toLowerCase() === "ajouter note_add") {
      this.visible = true;     
      return;
    }
    this.visible = false;
  }
  geolocation() {
    console.log("geolocation");
  }
}
