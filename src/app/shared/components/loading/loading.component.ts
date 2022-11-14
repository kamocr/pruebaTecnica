import { Component } from "@angular/core";

@Component({
  selector:'app-loading',
  templateUrl:'./loading.component.html',
  styleUrls:['./loading.component.css']
})
export class LoadingComponent {
  public frases: string[]=["Lo mejor de la vida es gratis","No dejes que el miedo te impida ser feliz","La alegría es contagiosa. Pásalo...","Es elegante ser buena persona","Tu único límite eres tú misma","Quien no arriesga no gana"]
  public fraseHtml:string = this.frases[0];
  constructor(){
    setInterval(()=> {this.getFraseAleatoria()}, 2500);
  }
  getFraseAleatoria(){
    let posicion = Math.floor(Math.random() * ((this.frases.length-1) - 0))
    this.fraseHtml= this.frases[posicion];
  }
}
