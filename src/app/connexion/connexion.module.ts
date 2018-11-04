import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccueilComponent],
  exports: [AccueilComponent]
})
export class ConnexionModule { }
