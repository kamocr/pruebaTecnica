import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as Modules from './components'
import { HeaderOrigami } from './shared/components';
@NgModule({
  declarations: [
    AppComponent,
    HeaderOrigami
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Modules.CotizadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
