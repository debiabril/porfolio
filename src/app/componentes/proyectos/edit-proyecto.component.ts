import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private sProyecto: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al buscar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe(
      data => {
        alert("Proyecto actualizado");
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
