import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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
export class InicioComponent {
  cpf = false;
  constructor() {}

  consultarCpf():void {
    this.cpf = true;
  }
}
