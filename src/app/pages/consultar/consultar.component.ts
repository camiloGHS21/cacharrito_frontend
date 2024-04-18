import { Component } from '@angular/core';
import { Reservaciones } from '../../entities/reservaciones';
import { ReservacionesService } from '../../services/reservaciones.service';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../entities/usuarios';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  reservas: Reservaciones[];
  constructor(private usuariosService:UsuariosService ,private reservacionesService:ReservacionesService) { }
  consultarPorId(cedula: number) {
    this.usuariosService.buscarUsuarioPorid(cedula).subscribe(
      dato =>{
        this.reservas = dato;
      }
    )
    console.log(this.reservas);
  }
  cancelarReservacion(id:number,estado:string):void {
    if(estado=="pagada"){
      alert("Reservacion no puede ser cancelada");
    }
    else {
      this.reservacionesService.ActualizarEstadoRservacion(id,"cancelada").subscribe(dato => {
        window.location.reload();
      })
    }
  }

}
