import { Component, Input } from "@angular/core";

@Component({
  selector:'app-moneda',
  templateUrl:'./moneda.component.html'
})

export class MonedaComponent{
  @Input() public typeOfPipe:string = 'USD'
  public datosLaborales = {
    moneda:this.typeOfPipe,
    ingresoBruto:0,
    ingresoNeto:0,
    antiguedadLaboral:null
  }
  constructor(){}
}
