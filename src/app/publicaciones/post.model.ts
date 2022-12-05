export interface datosCliente {
  id: string;
  nombre: string;
  estado: string;
  ciudad: string;
  sucursal: string;
  servicio: string;
  calificacionServicio: string;
  recomendacion: string;
}

export interface cliente{
  nombre: string;
  estado: string;
  ciudad: string;
  sucursal: string;
}

export interface servicio{
  servicio: string;
  calificacionServicio: string;
}
