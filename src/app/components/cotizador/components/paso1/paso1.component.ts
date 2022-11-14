import { ConsumoApiService } from './components/services/consumoApi.service';
import { Component } from "@angular/core";

@Component({
  selector:'app-cotizador-paso1',
  templateUrl:'./paso1.component.html',
  styleUrls:['./paso1.component.css']
})

export class CotizadorPaso1Component{
  public datosParaCotizar:any={
    valor: 35000,
    anio: 2020,
    prima: 5000,
    meses: 60
  };;
  public dataApi:any = undefined;
  public isLoading = true
  constructor(private consumoApi:ConsumoApiService){
    this.apiCall();
  }
  async apiCall(){
    await this.consumoApi.getInfo().then((data:any)=>{
      this.dataApi = data;
      this.isLoading=false
    }).catch((error)=>{
      console.log(error);
    })
  }
}
