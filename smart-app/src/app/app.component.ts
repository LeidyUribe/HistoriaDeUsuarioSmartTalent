import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from '.././app/tasks/task-list/task-list.component';
import { TaskFormComponent } from '.././app/tasks/task-form/task-form.component';
import { TaskFilterComponent } from '.././app/tasks/task-filter/task-filter.component';

import { TaskService } from '../services/task.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TaskFormComponent,
    TaskListComponent,
    TaskFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentFilter: string = 'all';
  constructor(private taskService: TaskService) {}

  title = 'Gestión de tareas';

  onFilterChange(filter: string): void {
    this.currentFilter = filter;
  }

  onTaskAdded(task: Task): void {
    task.id = this.taskService.getTasks().length + 1;
    this.taskService.addTask(task);
  }
}
