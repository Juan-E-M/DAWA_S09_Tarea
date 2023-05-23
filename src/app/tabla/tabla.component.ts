import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  nuevaTarea: string | null = null;
  tareas: string[] = [];

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.nuevaTarea = inputElement.value;
  }

  agregarTarea(event: Event) {
    event.preventDefault(); 

    if (this.nuevaTarea) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
