import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-your-services',
  templateUrl: './your-services.component.html',
  styleUrls: ['./your-services.component.css']
})
export class YourServicesComponent implements OnInit {

  formAddService: FormGroup;
  visible: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.jquery_code();    
  }

  createForm() {
    this.formAddService = this.formBuilder.group({
      emails: ['', Validators.required]
      //  service: ['', Validators.required], 
      //  positionGeo: [[], Validators.required],
      //  prix: ['', Validators.required]
    });
  }

  jquery_code() {

    $(document).ready(() => {
      $('select').material_select();
    });

    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button,
      container: undefined, // ex. 'body' will append picker to body
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function () { } //Function for after opening timepicker
    });
  }

  toggleService(event) {
    console.log(event.toElement.innerText.toLowerCase());
    if (event.toElement.innerText.toLowerCase() === "ajouter note_add") {
      this.visible = true;
      console.log($('.timepicker')); 
      $('.timepicker')
      return;
    }
    this.visible = false;
  }
  geolocation() {
    console.log("geolocation");
  }
}
