import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private datosPofolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      this.experienciaList = data.experiencia;
    });
  }

}
