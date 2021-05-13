import { Component, ViewChild } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favoritos[];
}

interface Favoritos {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'juan',
    favoritos: [
      { id: 45, nombre: 'pokemon 1' },
      { id: 46, nombre: 'pokemon 2' },
      { id: 47, nombre: 'pokemon 3' },
    ],
  };

  guardar() {
    console.log('Formulario posteado');
  }
  borrar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
  // splice:borra elementos del array mandandole el parametro y cuantos elementos quiero borrar

  anadir() {
    const nuevoFavorito: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    // le añadimos {...} para agregar este array al array de "favoritos" es como insertar un array dentro de otro
    // spred ... : https://anamartinezaguilar.medium.com/spread-operator-1e6667da2830
    this.nuevoJuego = '';
  }
}

// este es un componente que trabaja los formularios de forma reactiva, basicamente se ocupa tanto el ts como el html y interactuan entre si para poder ejecutar las
