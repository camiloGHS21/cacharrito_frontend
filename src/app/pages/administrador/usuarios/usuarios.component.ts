import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Usuarios } from '../../../entities/usuarios';
import { Automiviles } from '../../../entities/automiviles';
import { AutomovilesService } from '../../../services/automoviles.service';
import { FormsModule } from '@angular/forms';
import { HacerReservacionComponent } from '../../../modals/hacer-reservacion/hacer-reservacion.component';
import { RegistrarUsuariosComponent } from '../../../modals/registrar-usuarios/registrar-usuarios.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule,FormsModule,RegistrarUsuariosComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit  {
  usuarios:Usuarios[];
  automoviles:Automiviles[];

  constructor(private usuariosService:UsuariosService, private automvilService: AutomovilesService) { }

  ngOnInit(): void {
   this.automvilService.getAutomoviles().subscribe(
   data => {
     this.automoviles = data;
   }
   )
  }


  seleccionar(id:number){

    this.usuariosService.buscarUsuarioPoridAutomovil(id).subscribe(
   data => {
     this.usuarios = data;
   }
    )
  }
  abrirRegistro(){

    const modal = document.getElementById('registro-usuario');
    if(modal!=null){
      modal.style.display = 'block';
    }
  }
  cerrarRegistro(): void{
    const modal = document.getElementById('registro-usuario')
    if(modal!=null){
      modal.style.display = 'none'
  }
  }
}
