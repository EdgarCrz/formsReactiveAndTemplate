import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    // estamos declarando nuestro "miFormulario" que es un grupo
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Crash Bandicot', Validators.required],
      ],
      // en este caso "favoritos" es form builder de tipo array, no confundir "['Metal Gear', Validators.required]" solo es una propiedad mas no es un arreglo, tiene [] ya que dentro declararemos sus valores o si tiene vlidaciones
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  // entiendase que "control" = input, check osea una valor nuevo del formulario
  // basicamente estamos declarando una tipo variable que se va a conectar a una entrada en el dom
  // a la cual le estamos dando forma de como debe de ser y sus valicaciones

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  //creo que esto es una funcion  basicamente retorna que el arreglo de favoritos es  un FormArray
  // lo ocupamos en el dom

  constructor(private fb: FormBuilder) {}

  campoNoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  // esta funcion es usada para mostrar o no el spam en el DOM acá validamos si tiene errores o si ha sido tocado y haya se muestr if tiene errores y ha sido tocado

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    //
    // this.favoritosArr.push(
    //   new FormControl(this.nuevoFavorito.value, Validators.required)
    // );
    // Esta es otra forma de hacer la insercion al "favoritosArr"

    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
  borrar(i: number) {
    this.favoritosArr.removeAt(i);
  }
}
