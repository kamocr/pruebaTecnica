import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector:'app-informacionPersonal',
  templateUrl:'./informacionPersonal.component.html',
  styleUrls:['./../../../paso1/paso1.component.css']
})

export class InformacionPersonalComponent{

  public informacionPersonal:FormGroup
  constructor(private fb: FormBuilder){
    this.informacionPersonal = this.fb.group({
      cedula: ['', [Validators.required]],
      nombreCompleto: ['', [Validators.required]],
      Celular: [null, [Validators.email, Validators.required]],
      correoElectronico: ['', [Validators.required]]
    })
  }
}
