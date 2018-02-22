export class Tarea {
  realizado: boolean;
  descripcion: any;
    constructor(descripcion) {
      this.descripcion = descripcion;
      this.realizado = false;
    }
  }