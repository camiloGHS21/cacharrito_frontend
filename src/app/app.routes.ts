import { RouterModule, Routes } from '@angular/router';
import { IniciocacharritoComponent } from './pages/iniciocacharrito/iniciocacharrito.component';
import { ReservasAutomovilesComponent } from './pages/reservas-automoviles/reservas-automoviles.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
//import { AutomovilesComponent } from './pages/administrador/automoviles/automoviles.component';
import { ReservasionesComponent } from './pages/administrador/reservasiones/reservasiones.component';
import { UsuariosComponent } from './pages/administrador/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
//import { DisponibilidadesComponent } from './pages/administrador/disponibilidades/disponibilidades.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';

export const routes: Routes = [
  {path: '', component: IniciocacharritoComponent},
  {path: 'reservas', component:ReservasAutomovilesComponent},
  {path: 'consultar', component:ConsultarComponent},
  {
   path:'administrador',
   component:AdministradorComponent,
   children:[
      {path: '', component:ReservasionesComponent},
     // {path:'automoviles', component:AutomovilesComponent},
      {path:'usuarios', component:UsuariosComponent},
      //{path:'disponibilidades', component:DisponibilidadesComponent}
    ],canActivate: [AuthGuard]
  },
  { path: 'login', component:LoginComponent},

  {path: '**', redirectTo: ''}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
