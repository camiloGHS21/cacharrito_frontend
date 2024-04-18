import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Automiviles } from '../entities/automiviles';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutomovilesService {

  url = 'http://localhost:8082/api/automoviles'
  constructor(private cookieService: CookieService ,private http: HttpClient,private authService:AuthService) {

  }

  crearAutomoviles(atomovil:Automiviles): Observable<any> {
    const token = this.cookieService.get('admin');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post('http://localhost:8082/api/automoviles', atomovil,{ headers });
  }
  editarAutomoviles(atomovil:Automiviles): Observable<any> {
    const token = this.cookieService.get('admin');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put('http://localhost:8082/api/automoviles', atomovil,{ headers });
  }
  eliminarAutomoviles(id:number): Observable<any> {
    const token = this.cookieService.get('admin');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete('http://localhost:8082/api/automoviles/'+id,{ headers });
  }
  public getAutomoviles(): Observable<Automiviles[]> {

    return this.http.get<Automiviles[]>(this.url+'/ver_todos');
  }
}
