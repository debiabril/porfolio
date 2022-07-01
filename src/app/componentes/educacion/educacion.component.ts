import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  constructor(private datosPofolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      this.educacionList = data.educacion;
    });
  }

}
