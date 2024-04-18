import { Reservaciones } from "./reservaciones";

export class Usuarios {
  nombre: string;
  apellido: string;
  telefono: number;
  fechaNacimiento: Date;
  cedula: number;
  reservaciones: Reservaciones = new Reservaciones();
  constructor() {

  }


}
