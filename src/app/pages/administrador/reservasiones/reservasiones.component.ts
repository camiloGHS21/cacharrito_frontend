import { Component, OnInit} from '@angular/core';
import { ReservacionesService } from '../../../services/reservaciones.service';
import { Reservaciones } from '../../../entities/reservaciones';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-reservasiones',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reservasiones.component.html',
  styleUrl: './reservasiones.component.css'
})
export class ReservasionesComponent implements OnInit {
  reservaciones:Reservaciones[];
  reservacion = new Reservaciones();
  estados = [
    { value: 'no_pagada', display: 'No Pagada' },
    { value: 'pagada', display: 'Pagada' },
    { value: 'cancelada', display: 'Cancelada' }
  ];



  constructor(private reservacionesService:ReservacionesService) {

  }
  ngOnInit(): void {

  }

  editarReservacion(id:number): void {
    console.log(id);
    this.bucarReservacion(id);
    const modal = document.getElementById("actualizar")
    if (modal!=null){
      modal.style.display = "block";
    }
  }
  buscarPorDia(dia:number):void {
   this.reservacionesService.buscarReservacionesporDia(dia).subscribe(dato => {
     this.reservaciones = dato as any;
   })
  }

  cancelarReservacion(id:number):void {
    if(this.reservacion.estado=="pagada"){
      alert("Reservacion no puede ser cancelada");
    }
    else {
      this.reservacionesService.ActualizarEstadoRservacion(id,"cancelada").subscribe(dato => {
        window.location.reload();
      })
    }

  }
  pagadaReservacion(id:number):void {
    if(this.reservacion.estado=="cancelada"){
      alert("Estado de la reservacion no puede ser pagada");
    }else{
    this.reservacionesService.ActualizarEstadoRservacion(id,"pagada").subscribe(dato => {

      window.location.reload();

    })
  }
}
  bucarReservacion(id:number):void {
    this.reservacionesService.BuscarReservacion(id).subscribe(dato => {
    this.reservacion = dato as any;
    });
  }
  cerrarRegistro(){
    const modal = document.getElementById("actualizar")
    if (modal!=null){
      modal.style.display = "none";
    }
  }
  guardarRegistro(){
    this.reservacionesService.GuardarReservacion(this.reservacion).subscribe(dato => {
     this.cerrarRegistro();
     window.location.reload();
    })
  }
}
