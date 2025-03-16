import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../models/task.model';
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

  @Output() statusChanged = new EventEmitter<{ id: number, completed: boolean }>();
  @Output() taskDeleted = new EventEmitter<number>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  get filteredTasks(): Task[] {
    switch (this.filter) {
      case 'pending':
        return this.tasks.filter(task => !task.completed);
      case 'completed':
        return this.tasks.filter(task => task.completed);
      default:
        return this.tasks;
    }
  }

  onTaskStatusChange(id: number, completed: boolean): void {
    this.taskService.updateTaskStatus(id, completed);
    this.statusChanged.emit({ id, completed });// <-- Emitir evento al componente principal
  }

  onTaskDelete(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
    this.taskDeleted.emit(id); // <-- Emitir evento al componente principal
  }
}
