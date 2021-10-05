import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-persons',
  templateUrl: './table-persons.component.html',
  styleUrls: ['./table-persons.component.css']
})
export class TablePersonsComponent implements OnInit {
  dispositivoMobile!: boolean ;

  constructor( ) { }

  ngOnInit(): void {
    this.eesMobile()
  }

  eesMobile(){
    this.dispositivoMobile = screen.width <= 830
  }
}
