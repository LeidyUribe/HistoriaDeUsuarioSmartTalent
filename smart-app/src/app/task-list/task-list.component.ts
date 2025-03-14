import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onTaskStatusChange(id: number, completed: boolean): void {
    this.taskService.updateTaskStatus(id, completed);
  }

  onTaskDelete(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
