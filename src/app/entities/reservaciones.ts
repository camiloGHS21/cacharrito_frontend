import { Disponibilidad } from "./disponibilidad";

export class Reservaciones {
  id_de_reserva: number;
  hora_de_salida: string;
  destino: string;
  origen: string;
  fecha: Date;
  total_a_pagar: number;
  estado: String;
  disponibilidad: Disponibilidad = new Disponibilidad();

  constructor() {

  }
}
