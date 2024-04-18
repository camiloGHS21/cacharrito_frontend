import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disponibilidad } from '../entities/disponibilidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {
   url = "http://localhost:8082/api/disponibilidad"
  constructor(private http: HttpClient) { }

  public getDisponibilidad(): Observable<Disponibilidad[]> {
    return this.http.get<Disponibilidad[]>(this.url + '/ver_todos');
  }
  actualizarDisponibilidad(id:number):Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify({ id_disponibilidad: id });  // Adjust if your payload is different

    return this.http.put(`${this.url}/actualizar`, body, { headers: headers, responseType: 'text' });

   }
}
