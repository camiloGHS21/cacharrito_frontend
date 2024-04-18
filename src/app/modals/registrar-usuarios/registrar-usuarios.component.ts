import { Component, Input, OnInit, Output } from '@angular/core';
import { ReservacionesService } from '../../services/reservaciones.service';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../entities/usuarios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuarios',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registrar-usuarios.component.html',
  styleUrl: './registrar-usuarios.component.css'
})
export class RegistrarUsuariosComponent implements OnInit {
  idreservacion: Array<number> = [];
  usuario: Usuarios = new Usuarios();

   constructor(private reservacionesService:ReservacionesService , private usuarioService:UsuariosService) {

   }
  cerrarRegistro(): void{
    const modal = document.getElementById('registro-usuario')
    if(modal!=null){
      modal.style.display = 'none'
  }
  }


  guardarUsuario(): void {
    this.usuarioService.guardarUsuarios(this.usuario).subscribe(dato => {
     this.cerrarRegistro();

    })

  }
  ngOnInit() {
    this.reservacionesService.getReservaciones().subscribe(dato => {
      dato.map(reservacion => {

        this.idreservacion.push(reservacion.id_de_reserva);
      });
    })
  }

}
