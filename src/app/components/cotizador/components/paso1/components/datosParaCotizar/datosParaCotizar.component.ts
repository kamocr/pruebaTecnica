import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ConfigSliderModel } from "src/app/shared";

@Component({
  selector:'app-datosParaCotizar',
  templateUrl:'./datosParaCotizar.component.html',
  styleUrls:['./../../paso1.component.css']
})

export class DatosParaCotizarComponent implements OnInit{
  public sliderValorVehiculo:ConfigSliderModel = {
    nombre:'Valor del vehículo:',
    rangoMin: 12000,
    rangoMax: 100000
  }
  public sliderAnio:ConfigSliderModel  = {
    nombre:'Año:',
    rangoMin: 2009,
    rangoMax: 2019
  }
  public sliderPrima:ConfigSliderModel  = {
    nombre:'Prima:',
    rangoMin: 2400,
    rangoMax: 80000
  }
  public sliderPlazoMeses:ConfigSliderModel  = {
    nombre:'Plazo (meses):',
    rangoMin: 48,
    rangoMax: 84
  }

   @Input() public datosApi:any = undefined;
   @Input() public datosParaCotizar ={
    valor: 35000,
    anio: 2020,
    prima: 5000,
    meses: 60
  };
   @Output() public datosParaCotizarChange = new EventEmitter<any>();
  constructor(){}

  ngOnInit(): void {
    if(this.datosApi){
      this.sliderAnio.rangoMin = this.datosApi.values.usd.minYear;
      this.sliderAnio.rangoMax = this.datosApi.values.usd.maxYear;
      this.sliderValorVehiculo.rangoMin = this.datosApi.values.usd.minimumAmount;
      this.sliderValorVehiculo.rangoMax = this.datosApi.values.usd.maximumAmount;
    }
    this.cambio();
  }

  cambio(){
    this.datosParaCotizarChange.emit(this.datosParaCotizar);

  }
}
