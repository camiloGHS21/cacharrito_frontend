import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Reservaciones } from '../../entities/reservaciones';
import { CommonModule } from '@angular/common';
import { HacerReservacionComponent } from '../../modals/hacer-reservacion/hacer-reservacion.component';

@Component({
  selector: 'app-card-reservacion',
  standalone: true,
  imports: [CommonModule,HacerReservacionComponent],
  templateUrl: './card-reservacion.component.html',
  styleUrl: './card-reservacion.component.css'
})
export class CardReservacionComponent {
  @Input() reservacion: Reservaciones[];
  id :number;
  id_de_disponibilidad:number;
  total_a_pagar:number;
  puestos_disponibles:number;
  constructor() {}

  @Output() idDeReservacion = new EventEmitter<number>();

  abrirRegistro(idreserva:number,id_disponibilidad:number,total_a_pagar:number,puestos_disponibles:number): void {
    const modal = document.getElementById('registro')
    if(modal!=null){
      modal.style.display = 'block'
   }
    // Verificar si el objeto item y su propiedad id_de_reserva están definidos
    this.id = idreserva;
    this.id_de_disponibilidad = id_disponibilidad;
    this.total_a_pagar = total_a_pagar;
    this.puestos_disponibles = puestos_disponibles;
  }


}
