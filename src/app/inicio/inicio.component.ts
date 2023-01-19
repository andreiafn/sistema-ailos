import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class InicioComponent implements OnInit {
  cpf = false;
  inputCpf!: FormGroup;
  
  constructor() {}

  ngOnInit() {
    this.inputCpf = new FormGroup({
      cpfCooperado: new FormControl('', [Validators.required])
    });
    }
    
    get cpfCooperado(){
      return this.inputCpf.get('cpfCooperado')!;
    }
    consultarCpf():void {
      if(this.cpfCooperado.invalid){
        return;
      } else this.cpf = true;
  }

}
