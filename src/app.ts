import {Tarea} from './todo';

    export class App {
      descripcion: string;
      arrayTareas: any[];
      titulo: string;
      constructor() {
        this.titulo = "Lista de Tareas";
        this.arrayTareas = [];
        this.descripcion = '';
      }

      agregarTarea() {
        if (this.descripcion) {
          this.arrayTareas.push(new Tarea(this.descripcion));
          this.descripcion = '';
        }
      }

      eliminarTarea(todo) {
        let index = this.arrayTareas.indexOf(todo);
        if (index !== -1) {
          this.arrayTareas.splice(index, 1);
        }
      }
    }