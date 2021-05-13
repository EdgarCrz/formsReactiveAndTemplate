import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.module').then((m) => m.ReactiveModule),
    // ¡¡¡¡¡LAZYLOAD!!!!!
    // path/cuando alguien entre a la ruta "reactive", loadChildren/ carga a sus hijos y esos hijos
    // van a ser producto de import "('./reactive/reactive.module')", then/promesa/entonces cuando
    // los hijos esten cargados en memoria, cuando se cumpla la promesa devuelveme el "reactiveModule"
  },
  {
    path: 'template',
    loadChildren: () =>
      import('./template/template.module').then((m) => m.TemplateModule),
    // A grandes razgos: cuando entres a este path, vas a cargar a los hijos de "template" que son
    // (basicos,dinamicos,switches)
    // explicacion de Lazy Load: https://www.youtube.com/watch?v=P3YUzXfa_FI
  },
  {
    path: '**',
    redirectTo: 'template',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// este modulo es el routing global con el cual accederemos a las rutas hijas de "rective" y de "template"
// aqui estamos implementando lazyLoad
