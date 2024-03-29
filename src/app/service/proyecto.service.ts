import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = environment.URL +'proyecto/';
  constructor(private htttpClient: HttpClient) { }
  public lista(): Observable<Proyecto[]> {
    return this.htttpClient.get<Proyecto[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Proyecto> {
    return this.htttpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }
  public save(proyecto: Proyecto): Observable<any>{
    return this.htttpClient.post<any>(this.URL + 'create', proyecto);
  }
  public update(id:number, proyecto: Proyecto):Observable<any>{
    return this.htttpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }
  public delete(id:number): Observable<any>{
    return this.htttpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
