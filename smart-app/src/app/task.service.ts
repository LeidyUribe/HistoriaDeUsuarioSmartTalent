import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
/**
 * Servicio para manejar las operaciones CRUD de las tareas.
 */
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

/**
 * Actualiza el estado de una tarea (completada o pendiente).
 * @param id - El ID de la tarea a actualizar.
 * @param completed - El nuevo estado de la tarea (true para completada, false para pendiente).
 */
  updateTaskStatus(id: number, completed: boolean): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = completed;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
