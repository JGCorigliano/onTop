import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  [x: string]: any;

  private persona:Persona[] =
    [
      {
        name: "Aquaman",
        type: "Traditional",
        img: "assets/images/aquaman.png",
        date: "1941-11-01",
        amount:"$450USD",
        status: "Active"
      },
      {
        name: "Batman",
        type: "Traditional",
        img: "assets/images/batman.png",
        date: "1939-05-01",
        amount:"$450USD",
        status: "Active"
      },
      {
        name: "Daredevil",
        type: "Traditional",
        img: "assets/images/daredevil.png",
        date: "1964-01-01",
        amount: "$200USD",
        status: "Signature pending"
      },
      {
        name: "Hulk",
        type: "Traditional",
        img: "assets/images/hulk.png",
        date: "1962-05-01",
        amount:"$200USD",
        status: "Active"
      },
      {
        name: "Linterna Verde",
        type: "Traditional",
        img: "assets/images/linterna-verde.png",
        date: "1940-06-01",
        amount: "$450USD",
        status: "Active"
      },
      {
        name: "Spider-Man",
        type: "Traditional",
        img: "assets/images/spiderman.png",
        date: "1962-08-01",
        amount: "$200USD",
        status: "Signature pending"
      },
      {
        name: "Wolverine",
        type: "Traditional",
        img: "assets/images/wolverine.png",
        date: "1974-11-01",
        amount: "$200USD",
        status: "Active"
      }
  ];

  constructor() {
    console.log('servicio listo para usarse')
   }

   public getPersonas():Persona[]{
     return this.persona;
   }

   buscarPersonas( termino:string ){

      let personasArr:Persona[] = [];
      termino = termino.toLowerCase();

      for(let persona of this.personas){
        let nombre = persona.name.toLowerCase();
        if(nombre.indexOf( termino ) >=0 ){
          personasArr.push( persona)
        }
      }
      
      return personasArr;

  }

}

export interface Persona{
  name:string;
  type:string;
  img:string;
  date:string;
  amount:string;
  status:string;
}
