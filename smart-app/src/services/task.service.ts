import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../app/models/task.model';
/**
 * Servicio para manejar las operaciones CRUD de las tareas.
 */
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.tasksSubject.next(tasks);
  }

  /**
   * Actualiza el estado de una tarea (completada o pendiente).
   * @param id - El ID de la tarea a actualizar.
   * @param completed - El nuevo estado de la tarea (true para completada, false para pendiente).
   */
  updateTaskStatus(id: number, completed: boolean): void {
    const tasks = this.getTasks();
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = completed;
      this.tasksSubject.next(tasks);
    }
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter((t) => t.id !== id);
    this.tasksSubject.next(tasks);
  }
}
