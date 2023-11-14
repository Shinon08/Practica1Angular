import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  //public menuItems: {item:string, active:boolean}[] = [];
  //opciones para el menu
  menuItems: MenuItem[] = [];
  //public tareas: {titulo: string, descripcion:string, status:string}[] = [];
  //vista de tareas
  tareas: Tarea[] =[];
  //agregar tarea
  newTarea: Tarea = {
    titulo:'',
    descripcion:'',
    status:'Pendiente',
  };

  constructor() {
    this.menuItems.push( {item: 'Nueva tarea', active: false} );
    this.menuItems.push( {item: 'Mis tareas', active: true} );
  }

  // public setMenuItemAsActive(item: {item:string, active:boolean}): void {
  //   for (let menuItem of this.menuItems){
  //     if (menuItem == item){
  //       menuItem.active = true;
  //     }
  //     else {
  //       menuItem.active = false;
  //     }
  //   }
  // }
  public setMenuItemAsActive(item: number): void {
    for (let x = 0; x<this.menuItems.length; x++){
      if (x == item){
        this.menuItems[x].active = true;
        continue;
      }
      
      this.menuItems[x].active = false;
    }
  }

  public agregarTarea(titulo: string, descripcion: string): void {
    this.newTarea.titulo= titulo;
    this.newTarea.descripcion= descripcion;

    this.tareas.push(this.newTarea);
    this.newTarea= {
      titulo: titulo,
      descripcion: descripcion,
      status: "Pendiente"
    }
  }
}
