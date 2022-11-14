import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector:'app-slider',
  templateUrl:'./slider.component.html',
  styleUrls:['./slider.component.css']
})

export class SliderComponent {
  @Input () public nombreSlider:string ='';
  @Input () public rangoMinimo:number =0;
  @Input () public rangoMaximo:number=0;
  @Input () public step:number =1;
  @Input () public rangoSeleccionado:number =0;
  @Output() public rangoSeleccionadoChange = new EventEmitter<any>();
  @Output() public changes = new EventEmitter<any>();
  // configuramos el slider
  constructor(){}
  btnAction(operacion:string){
    switch (operacion) {
      case 'suma':
        this.rangoSeleccionado+=this.step
        break;
        case 'resta':
        this.rangoSeleccionado-=this.step
        break;

      default:
        console.error('Error al ejecutar esta operacion');
        break;
      }
      this.onChange()
  }
  onChange(){
    this.rangoSeleccionadoChange.emit(this.rangoSeleccionado)
  }
}
