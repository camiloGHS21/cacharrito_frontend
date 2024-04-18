import {Component, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reservaciones } from '../../entities/reservaciones';
import { ReservacionesService } from '../../services/reservaciones.service';

@Component({
  selector: 'app-buscar-automovil',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule
    , MatDatepickerModule,
    ],
  templateUrl: './buscar-automovil.component.html',
  styleUrl: './buscar-automovil.component.css'
})
export class BuscarAutomovilComponent  implements OnInit {

  destinos: Reservaciones[];

  minDate: Date;
  maxDate: Date;



  buscarForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private ReservacionesServicios: ReservacionesService) {
    this.buscarForm = this.fb.group({
      origen: [''],
      destino: [''],
      fecha: Date.now()

    });
     // Establecer la fecha mínima como el primer día del año 2024
     this.minDate = new Date('2024-04-02');
     // Establecer la fecha máxima como el último día del año 2024
     this.maxDate = new Date('2024-05-01');
  }
  ngOnInit(): void {
    this.ReservacionesServicios.getReservaciones().subscribe(dato => {
     this.destinos = dato.filter((destino, index, self) =>
       self.findIndex((d) => d.origen === destino.origen && d.destino === destino.destino) === index
     );
    })
   }

  buscar(): void {
    // this.datosReserva.setDatosReserva(this.buscarForm.value);

      const datosBusqueda = this.buscarForm.value;
      this.router.navigate(['/reservas'], { queryParams: datosBusqueda });


  }

}


