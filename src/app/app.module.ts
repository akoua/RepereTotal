import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';

//la route
import { AppRoutingModule } from "./app.routing";
//nos propres modules
import { PlaceModule } from "./place/place.module";
import { ConnexionModule } from "./connexion/connexion.module";

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceModule,
    ConnexionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
