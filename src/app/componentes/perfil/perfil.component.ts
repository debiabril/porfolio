import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
/* import { PorfolioService } from 'src/app/servicios/porfolio.service'; */

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
    persona : persona = new persona("","","");
  
    constructor(public personaService: PersonaService){
  
    }
  
    ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {this.persona = data})
      console.log(this.persona);
    }

  /* miPorfolio:any;
  constructor(private datosPofolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  } */

}
