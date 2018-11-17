import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { YourArticlesComponent } from './your-articles/your-articles.component';
import { YourServicesComponent } from './your-services/your-services.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [    
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AccueilComponent, AddArticlesComponent, YourArticlesComponent, YourServicesComponent, AddStoreComponent],
  exports: [AccueilComponent, AddArticlesComponent, YourArticlesComponent, YourServicesComponent, AddStoreComponent]
})
export class ConnexionModule { }
