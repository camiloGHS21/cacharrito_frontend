import { Component, OnInit } from '@angular/core';
import { CardReservacionComponent } from '../../components/card-reservacion/card-reservacion.component';
import { ActivatedRoute } from '@angular/router';
import { ReservacionesService } from '../../services/reservaciones.service';
import { Reservaciones } from '../../entities/reservaciones';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas-automoviles',
  standalone: true,
  imports: [CardReservacionComponent,CommonModule],
  templateUrl: './reservas-automoviles.component.html',
  styleUrl: './reservas-automoviles.component.css'
})
export class ReservasAutomovilesComponent  implements OnInit{


reservaciones: Reservaciones[];
reservaciones2: Reservaciones[];
origen: string;
destino: string;
fecha: string;

InRserva: boolean ;


constructor(private reservacionesService:ReservacionesService,private route: ActivatedRoute,) {

}
ngOnInit(): void {
  this.reservacionesService.getReservaciones().subscribe(dato => {
    this.reservaciones2 = dato;
  });
  // this.reservaciones.forEach(element => {
  //   if(element.disponibilidad.puestos_disponibles == 0){
  //     this.reservacionesService.ActualizarEstadoRservacion(element.id_de_reserva,"pagada").subscribe(dato => {
  //       window.location.reload();
  //     })
  //   }
  // })

  this.route.queryParams.subscribe(params => {
    this.origen = params['origen'];
    this.destino = params['destino'];
    this.fecha = params['fecha'];
    //const formattedDate = format(this.fecha, 'yyyy-MM-dd');

    if (this.origen && this.destino && this.fecha) {
      console.log(this.origen, this.destino, this.fecha);

      this.reservacionesService.buscarReservaciones(this.origen, this.destino, this.fecha).subscribe(reservaciones => {
        this.reservaciones = reservaciones;
        console.log(this.reservaciones); // Verifica las reservaciones obtenidas
        this.InRserva = true;
      });
    } else {
      console.log('No hay datos');
      this.InRserva = false;
    }
  });
}

}
