import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';
  puestoE: string = '';
  fechaE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.nombreE, this.descripcionE, this.imgE, this.puestoE, this.fechaE);
    this.sExperiencia.save(experiencia).subscribe(data=>{
      alert("Experiencia agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al agregar experiencia");
      this.router.navigate(['']);
    }
    )
  }

}
