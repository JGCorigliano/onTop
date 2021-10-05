import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/service.service';

@Component({
  selector: 'app-buscador-persona',
  templateUrl: './buscador-persona.component.html',
  styleUrls: ['./buscador-persona.component.css']
})
export class BuscadorPersonaComponent implements OnInit {

  personas:any[] = [];
  termino: string | undefined;

  constructor( private activatedRoute: ActivatedRoute,
              private _personaService: PersonaService ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.termino = params['termino'];
      this.personas = this._personaService.buscarPersonas( params['termino'] );
        console.log(this.personas);
    })
  }

}
