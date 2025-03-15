import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() filter: string = 'all'; // <-- Recibe el filtro como entrada
  tasks: Task[] = [];

  @Output() statusChanged = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'pending') {
      return this.tasks.filter((task) => !task.completed);
    } else if (this.filter === 'completed') {
      return this.tasks.filter((task) => task.completed);
    } else {
      return this.tasks; // Mostrar todas las tareas
    }
  }

  onTaskStatusChange(id: number, completed: boolean): void {
    this.taskService.updateTaskStatus(id, completed);
    this.statusChanged.emit('Estado de la tarea actualizado'); // <-- Emitir evento al componente principal
  }

  onTaskDelete(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
    this.taskDeleted.emit('Tarea eliminada correctamente'); // <-- Emitir evento al componente principal
  }
}
