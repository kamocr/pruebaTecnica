import { NgModule } from '@angular/core';
import {SliderComponent} from './components/slider.component'
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports:[SliderComponent]
})
export class CotizadorModule { }
