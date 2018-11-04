import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { SearchComponent } from "./place/search/search.component";
import { SliderComponent } from './slider/slider.component';
import { AccueilComponent } from './connexion/accueil/accueil.component';
 
 
 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'searchPlace' },
   {path:'searchPlace', component: SearchComponent},      
   {path:'sliderPlace', component: SliderComponent},  
   {path:'accueilConnexion', component: AccueilComponent}, 
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
  