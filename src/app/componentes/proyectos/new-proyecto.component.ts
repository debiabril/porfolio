import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';
  fechaP: string = ''; 
  linkP: string = '';

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP, this.fechaP, this.linkP);
    this.sProyecto.save(proyecto).subscribe(data=>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al agregar proyecto");
      this.router.navigate(['']);
    }
    )
  }
}
