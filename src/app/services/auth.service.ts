import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Admin } from '../entities/admin';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8082/api/login';
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<String>("");// Mantener el estado del administrador
  private password = new BehaviorSubject<String>("");// Mantener el estado del administrador
  fecha: any;


  constructor(private cookieService: CookieService, private http: HttpClient) {
   this.loadInitialAuthState();
  }

  private loadInitialAuthState() {
    const isLoggedInCookie = this.cookieService.get('isLoggedIn');
    const username1 = this.cookieService.get('username');
    const password1 = this.cookieService.get('password');
    if (isLoggedInCookie) {
      this.loggedIn.next(true);
    }
    if ( password1) {
      this.password.next(password1);
    }
    if (username1) {
      this.username.next(username1);
    }
  }

  isLoggedIn() {
    return this.loggedIn.getValue();
  }

  isUsername() {
    return this.username.getValue();
  }
  isPassword() {
    return this.password.getValue();
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
    this.cookieService.set('isLoggedIn', String(value)); // Actualizar la cookie también
  }

 setUsername(value: string) {
   this.username.next(value);
   this.cookieService.set('username', value); // Actualizar la cookie aquí
 }
  setPassword(value: string) {
    this.password.next(value);
    this.cookieService.set('password', value); // Actualizar la cookie aquí
  }
  login(username: string, password: string): Observable<object> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });

    // Create a new instance of the Admin class


    return this.http.post<object>(this.url, {}, { headers }); // Coloca las cabeceras fuera del objeto de cuer
  }
  logout() {
    // Limpiar la sesión y redirigir al login
    this.cookieService.delete('isLoggedIn');
    this.cookieService.delete('isAdmin');
    this.loggedIn.next(false);
    this.username.next("");
    this.password.next("");
  }
}

