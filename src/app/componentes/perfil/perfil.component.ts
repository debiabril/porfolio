import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPofolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPofolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
