import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DashPlaceComponent } from './dash-place/dash-place.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, DashPlaceComponent],
  exports: [SearchComponent]
})
export class PlaceModule { }
