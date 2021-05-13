import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
    // como su fuera un objeto, en primer lugar pondremos el valor que tendra ese input,
    // en 2° lugar pondremos validaciones sincronas   en ambos casos si son mas de 2 validaciones estas se encerraran en []
    // y en 3° lugar pondremos validaciones asincronas  en ambos casos si son mas de 2 validaciones estas se encerraran en []
  });
  // "miFormulario añ ser de tipo FormGroup" indica que esta asociado a un formulario del DOM y allá esta representado por "formControlName="nombre""

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080TI',
      precio: 2000,
      existencias: 10,
    });
  }

  campoNoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  // Esto es una funcion que estoy ejecutando en el DOM, en este caso nos mandan un parametro type string en donde se este usando
  // usamos nuestra propiedad "miFormulario", para asi acceder a las propiedades de un FormGroup para hacer las validaciones
  // si tiene errores o si ya ha sido tocado el elemento
  // de esta manera podemos hacer uso de esta funcion en cada input que queramos validar

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
