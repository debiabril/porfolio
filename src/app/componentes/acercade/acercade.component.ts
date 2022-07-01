import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPofolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
