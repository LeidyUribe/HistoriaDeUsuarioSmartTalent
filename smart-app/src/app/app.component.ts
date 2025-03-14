import { Component, OnInit } from '@angular/core';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  alertMessage: string | null = null;
  alertType: any = null;

  constructor(
    private taskService: TaskService) {}

  title = 'Gestión de tareas';

  onTaskAdded(task: Task): void {
    task.id = this.taskService.getTasks().length + 1;
    this.taskService.addTask(task);
  }
}
