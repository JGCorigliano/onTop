import { Component, OnInit } from '@angular/core';
import { PersonaService, Persona } from 'src/app/services/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  personas:Persona[] = [];

  constructor( private _personaService: PersonaService) {

  }

  ngOnInit(): void {
      this.personas = this._personaService.getPersonas();
      console.log(this.personas);
  }

}
