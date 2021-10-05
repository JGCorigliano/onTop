import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPersonaComponent } from './components/buscador-persona/buscador-persona.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'buscar/:termino', component:BuscadorPersonaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(routes);
