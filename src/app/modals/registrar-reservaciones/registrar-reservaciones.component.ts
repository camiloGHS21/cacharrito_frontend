import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-reservaciones',
  standalone: true,
  imports: [],
  templateUrl: './registrar-reservaciones.component.html',
  styleUrl: './registrar-reservaciones.component.css'
})
export class RegistrarReservacionesComponent {
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


  }
}
