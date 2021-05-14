import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  //
  //
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.reset({ ...this.persona, condiciones: true });

    this.miFormulario.valueChanges.subscribe(
      ({ condiciones, ...restoDeArgumentos }) => {
        // delete form.condiciones;
        this.persona = restoDeArgumentos;
      }
    );
    // esta funcion es un poco mas limpia desestructuramos el form, extraemos "condiciones" y devolvemos el restante con rest, indicando asi que la persona es igual al restante

    // this.miFormulario.valueChanges.subscribe((form) => {
    //   delete form.condiciones;
    //   this.persona = form;
    // });
    // esta es una forma alternativa mas especifica, para que los datos se cambien sincronicamente(osea que se cambien a la par de cuando oprimimos botones)
    //valueChanges: Un observable de multidifusión que emite un evento cada vez que cambia el valor del control, en la interfaz de usuario o mediante programación. También emite un evento cada vez que llama a enable () o disable () sin pasar {emitEvent: false} como un argumento de función.
    //Despues usamos subscribe para estar atentos a los cambios, cuando lo haya ejecutamos la funcion flecha  que borra la propiedad "condiciones", e indica que persona es igual al valor del parametro form ya con "condiciones" borradas
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    // "formValue": es igual a una copia de miFormulario.value, la copia la hacemos con el operador spred {...} para objetos
    delete formValue.condiciones;
    // borramos la propiedad condiciones, ya que en este objeto "persona" es diferente a "miFormulario"
    console.log(formValue);

    console.log('Probando GIT');
    console.log('hola');
  }
}

// ESTA ES LA DOCUMENTACION OFICIAL DE LOS FORMULARIOS REACTIVOS

// https://angular.io/guide/reactive-forms
