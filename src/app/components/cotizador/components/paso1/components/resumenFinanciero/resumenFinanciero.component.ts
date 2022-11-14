import { Component, DoCheck, Input } from "@angular/core";

@Component({
  selector:'app-resumenFinanciero',
  templateUrl:'./resumenFinanciero.component.html',
  styleUrls:['./../../paso1.component.css']
})

export class ResumenFinancieroComponent implements DoCheck{
  public resumenFinanciero:any = {
    montoFinanciar:0,
    comision:0,
    totalFinanciar:0,
    cuotaPrestamo:0,
    seguroVehiculoObligatorio:0,
    seguroOpcionalSeleccionado:0,
    seguroOpcional6:0,
    seguroOpcional12:0,
    seguroVida:0,
    total:0,
    montoDesembolsar:0
  };
  public porcentajeComision:number=3.25;
  public isSeguro6=undefined;
  public seguroVida=false;
  // varible que almacena la informacion de la seccion, datos para cotizar
  @Input() public datosParaCotizar:any;
  // almacena los datos del api que son llamador del componente "paso 1"
  @Input() public datosApi:any = {};
  constructor(){ }

  ngDoCheck(): void {
    if(this.datosParaCotizar){
      this.calculos()
    }
  }

  calculos(){
    // buscamos el anio en el api para seleccionar ciertos datos en especifico
    let anioSeleccionado = this.datosApi.values.usd.years.find((element:any) => element.year ==this.datosParaCotizar.anio)
      this.porcentajeComision =anioSeleccionado.commission
      this.resumenFinanciero.montoFinanciar=this.datosParaCotizar.valor-this.datosParaCotizar.prima;
      this.resumenFinanciero.comision=this.resumenFinanciero.montoFinanciar*(anioSeleccionado.commission/100);
      this.resumenFinanciero.totalFinanciar=this.resumenFinanciero.montoFinanciar+this.resumenFinanciero.comision;
      this.resumenFinanciero.cuotaPrestamo=this.resumenFinanciero.totalFinanciar*(this.datosApi.values.cuota/100);
      this.resumenFinanciero.seguroVehiculoObligatorio=this.resumenFinanciero.cuotaPrestamo*(anioSeleccionado.insuranceCoverage.CoberturaA.value/100);
      this.resumenFinanciero.seguroOpcional6=(this.resumenFinanciero.cuotaPrestamo+this.resumenFinanciero.seguroVehiculoObligatorio)*(this.datosApi.values.unemploymentInsurance6/100);
      this.resumenFinanciero.seguroOpcional12=(this.resumenFinanciero.cuotaPrestamo+this.resumenFinanciero.seguroVehiculoObligatorio)*(this.datosApi.values.unemploymentInsurance12/100);
      this.resumenFinanciero.seguroOpcionalSeleccionado=this.isSeguro6=="true"?this.resumenFinanciero.seguroOpcional6:this.isSeguro6=="false"?this.resumenFinanciero.seguroOpcional12:0;

      this.resumenFinanciero.seguroVida=this.resumenFinanciero.montoFinanciar*(this.datosApi.values.lifeInsurance/100);
      this.resumenFinanciero.total=this.resumenFinanciero.cuotaPrestamo+this.resumenFinanciero.seguroVehiculoObligatorio+this.resumenFinanciero.seguroOpcionalSeleccionado;
      this.resumenFinanciero.total+=this.seguroVida?this.resumenFinanciero.seguroVida:0;
      this.resumenFinanciero.montoDesembolsar=this.resumenFinanciero.totalFinanciar;
    }
  }
