import { Component, OnInit } from '@angular/core';
interface Task{
  descripcion: string;
  cantidad: number;
  coste: number;
  // total: number;
 }
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  tasks: Array<Task> = [
    {
      descripcion: 'Pantalla',
      cantidad: 1,
      coste: 150
    }
  ];

  clearToDo(){
    let do_delete = confirm("Desea borrar todas las columnas?");
    if (do_delete){
      this.tasks.splice(0);
    }
  }

  deleteTask(idx: number){
      this.tasks.splice(idx, 1);
  }

  addTask(input: any){
    let value = input.value;
    input.value = "";
    this.tasks.push(
      {
        descripcion: value,
        cantidad: value,
        coste: value
      });
  }

  constructor() { }

  ngOnInit() {
  }

}
