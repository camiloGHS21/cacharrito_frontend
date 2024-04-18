import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Admin } from '../../entities/admin';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin:Admin= new Admin();
  constructor(private authService: AuthService, private router: Router,private cookieService: CookieService) {
    // Verificar si hay una cookie de autenticación al inicializar el servicio
    const isLoggedInCookie = this.cookieService.get('isLoggedIn');
    if (isLoggedInCookie && isLoggedInCookie === 'true') {
      this.authService.setLoggedIn(true);
    }
  }



  onSubmit() {
    this.authService.login(this.admin.username, this.admin.password).subscribe((data) => {
      console.log(data); // Puedes manejar la respuesta del servidor aquí
      this.cookieService.set('isLoggedIn', 'true', 1);

      this.cookieService.set('username', `${this.admin.username}`, 1);
      this.cookieService.set('password', `${this.admin.password}`, 1);
      this.authService.setLoggedIn(true);
      this.authService.setUsername(`${this.admin.username}`);
      this.authService.setPassword(`${this.admin.password}`);
      this.router.navigate(['/administrador']);
    });
  }


}
