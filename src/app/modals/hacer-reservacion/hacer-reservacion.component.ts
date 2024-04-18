import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../../entities/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { DisponibilidadService } from '../../services/disponibilidad.service';
import { Disponibilidad } from '../../entities/disponibilidad';

@Component({
  selector: 'app-hacer-reservacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hacer-reservacion.component.html',
  styleUrl: './hacer-reservacion.component.css'
})
export class HacerReservacionComponent {

 @Input() id:any ;
 @Input() id_disponibilidad:any ;
 @Input() total_a_pagar:number ;
 @Output() puestos_disponibles:number;

usuario: Usuarios = new Usuarios();

disponibilidad:Disponibilidad = new Disponibilidad();

  constructor(private usuariosService:UsuariosService,private disponibilidadService:DisponibilidadService) {
  }
 abrirRegistro(id:number): void{
  const modal = document.getElementById('registro')
  if(modal!=null){
    modal.style.display = 'block'
 }
 console.log(id);

}
cerrarRegistro(): void{
  const modal = document.getElementById('registro')
  if(modal!=null){
    modal.style.display = 'none'
}}


guardarRegistro(): void {
  this.usuario.reservaciones.id_de_reserva = this.id;
  this.disponibilidad.id_disponibilidad=this.id_disponibilidad;
  // lógica para guardar la reserva
   this.usuariosService.guardarUsuarios(this.usuario).subscribe(
     data => {
       this.actualizarDisponibilidad(this.id_disponibilidad);
       this.cerrarRegistro();
       window.location.reload();
       alert("Reservacion realizada con exito"+"\n total a pagar : "+this.total_a_pagar+"\n puesto asignado : "+(this.puestos_disponibles));


     }
   )
}
private actualizarDisponibilidad(id:number): void {
  this.disponibilidadService.actualizarDisponibilidad(id).subscribe(
  )
}
}
