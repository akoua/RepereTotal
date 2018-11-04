import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { SearchComponent } from "./place/search/search.component";
import { SliderComponent } from './slider/slider.component';
import { AccueilComponent } from './connexion/accueil/accueil.component';
import { AddArticlesComponent } from './connexion/add-articles/add-articles.component';
import { YourArticlesComponent } from './connexion/your-articles/your-articles.component';
 
 
 const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'searchPlace'},
   {path:'searchPlace', component: SearchComponent},      
   {path:'sliderPlace', component: SliderComponent},  
   {path:'accueilConnexion', component: AccueilComponent}, 
   {path:'addArticle', component: AddArticlesComponent}, 
   {path:'yourArticles', component: YourArticlesComponent}, 
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
  