import { Component, OnInit } from '@angular/core';
/* import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service'; */
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  /* persona : persona = new persona("","","");

  constructor(public personaService: PersonaService){

  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  } */
  acercadeList:any;
  datosList:any;
  constructor(private datosPofolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      this.acercadeList=data.acercade;
    });
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      this.datosList=data.datos;
    });
  }

}
