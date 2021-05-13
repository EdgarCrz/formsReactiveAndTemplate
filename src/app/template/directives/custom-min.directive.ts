import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
    // añadimos estos providers, que se usan para hacer validaciones, el multi, supongo que es para usara varias al mismo tiempo
  ],
})
// custom min es el nomobre con el cual voy a usar esta directiva
export class CustomMinDirective implements Validators {
  @Input() minimo!: number;
  // basicamente este decorador esta treyendo "minimo de tipo numbre" le ponemos ! para indicarle a TS que
  // que aunque no este incializada  ni declarada, esta "variable" va a tener un valor

  constructor() {}

  validate(control: FormControl) {
    const inputValue = control.value;
    // la variable "inputValue" se va a llenar con lo que exista en el parametro controls especificamente en su pripiedad value, que es lo que el usuario introduce

    return inputValue < this.minimo ? { customMin: true } : false;
    // aqui ocupamos un ternario, si el  "inputValue" es menor que el "minimo" entonces devolvemos un objeto customMin con valor true si no es falso
  }
}

// esto es una directiva, como lo podria ser ngModel, para poder usarlo, tenemos que hacer una importacion,
// solo que este o hicimos nosotros y tenemos que cargarlo en el "template.module.ts" para poder usarlo
