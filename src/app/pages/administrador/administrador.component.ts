import { Component } from '@angular/core';
import { NavegacionAdministradorComponent } from '../../components/navegacion-administrador/navegacion-administrador.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [NavegacionAdministradorComponent,RouterOutlet],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {

}
