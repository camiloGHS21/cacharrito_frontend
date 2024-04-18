import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavegacionComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cacharrito_web';
  constructor(private authService: AuthService) {}

  isAdminRoute() {
    // Lógica para verificar si la ruta actual es para administradores
    if (typeof window !== 'undefined') {
      return window.location.pathname.startsWith('/administrador');
    }
    return false;
  }

  ngOnInit() {
    if (this.isAdminRoute() && !this.authService.isLoggedIn()) {
      // Si la ruta es para administradores y el usuario no ha iniciado sesión, redirigir al login
      this.authService.logout(); // Opcional: limpiar cualquier estado de sesión existente
    }
  }
}
