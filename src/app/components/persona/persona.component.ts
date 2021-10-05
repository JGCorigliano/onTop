import { Component, OnInit } from '@angular/core';

import { PersonaService, Persona } from 'src/app/services/service.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas:Persona[] = [];

  constructor( private _personaService: PersonaService) {

  }

  ngOnInit(): void {
      this.personas = this._personaService.getPersonas();
      console.log(this.personas);
  }

}
