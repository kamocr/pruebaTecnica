import { NgModule } from '@angular/core';
import * as Shared from './../../shared';
import {MatTabsModule} from '@angular/material/tabs';
import * as ComponentsAndServices from './components';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ComponentsAndServices.MonedaComponent,
    ComponentsAndServices.CotizadorPaso1Component,
    ComponentsAndServices.CotizadorPaso2Component,
    ComponentsAndServices.CotizadorGeneralComponent,
    ComponentsAndServices.DatosParaCotizarComponent,
    ComponentsAndServices.ResumenFinancieroComponent,
    ComponentsAndServices.InformacionLaboralComponent,
    ComponentsAndServices.InformacionPersonalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    NgxSliderModule,
    HttpClientModule,
    MatStepperModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Shared.LoadingModule,
    MatButtonToggleModule,
    Shared.CotizadorModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ComponentsAndServices.DatosCotizarBehaviorService,
    ComponentsAndServices.ConsumoApiService
  ],
  bootstrap: []
})
export class CotizadorModule { }
