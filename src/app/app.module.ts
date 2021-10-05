import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TablePersonsComponent } from './components/table-persons/table-persons.component';

import { PersonaService } from './services/service.service';
import { PersonaComponent } from './components/persona/persona.component';
import { SearchComponent } from './components/search/search.component';
import { BuscadorPersonaComponent } from './components/buscador-persona/buscador-persona.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TablePersonsComponent,
    PersonaComponent,
    SearchComponent,
    BuscadorPersonaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
