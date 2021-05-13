import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  // basicamente estamos trayendo un elemento del DOM para convertirlo en una propiedad
  // utilizable en este lado del ts
  //ViewChild: Decorador de propiedades que configura una consulta de vista. El detector de cambios busca el primer elemento o la directiva que coincida con el selector en la vista DOM. Si la vista DOM cambia y un nuevo hijo coincide con el selector, la propiedad se actualiza.

  initForm = {
    producto: 'rtx',
    precio: 10,
    existencias: 10,
  };
  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
    // retorname true o false, si ha sido tocado y cambio el estado de invalid, para poder mostrar el mensaje "Debe de ser de 3 letras"
    // tomar en cuenta que son 3 validaciones (que haya sido tocado, que tenga 3 y que este lleno el precio por el requiered)
    // solo asi obtenemos el "false" que necesitamos para NO mostrar el mensaje de error, si da true lo mostrara
    // para poder acceder a "miFormulario" se usa el this ya que se reconoce como una propiedad de la clase
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0
    );
  }

  // guardar(miFormuario: NgForm) {
  guardar() {
    // console.log(this.miFormulario);
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
    // Una vez que la informacion fue "almacenada" accedo por referencia a "miFormulario"
    //y utilizo un metodo de ngForm que es resetForm evidentemente es para borrar los datos en cuanto le de Guardar
    // podemos como los valor del formulario regresan a su estatus original

    // podemos añadir como si fuera un parametro un objeto con propiedades para que al resetear aparezcan estos valores por default
  }
}
