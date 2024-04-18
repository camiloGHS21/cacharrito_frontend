import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../entities/usuarios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = "http://localhost:8082/api/usuarios";
  constructor(private http: HttpClient, private authService: AuthService) {}

  public getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url + '/ver_todos', {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(this.authService.isUsername() + ':' + this.authService.isPassword()),
      }),
    });
  }

  public guardarUsuarios(usuarios: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.url + '/guardar', usuarios)
}

public buscarUsuarioPoridAutomovil(idAutomovil:number): Observable<Usuarios[]> {
  const headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa(this.authService.isUsername() + ':' + this.authService.isPassword()),
    'Content-Type': 'application/json'
  });
  return this.http.post<Usuarios[]>(this.url + '/buscarPorIdAutomovil', idAutomovil,{headers});
}
 buscarUsuarioPorid(id: number): Observable<any> {
  const headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa("admin"+ ':' + "1234"),
    'Content-Type': 'application/json'
  });
  return this.http.post(this.url + '/buscar_id', id,{headers});
 }
}
