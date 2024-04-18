import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navegacion-administrador',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navegacion-administrador.component.html',
  styleUrl: './navegacion-administrador.component.css'
})
export class NavegacionAdministradorComponent {

  constructor(private authService: AuthService){}

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
