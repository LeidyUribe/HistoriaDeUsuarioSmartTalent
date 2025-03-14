import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {

  @Output() taskAdded = new EventEmitter<Task>();
  task: Task = { id: 0, title: '', description: '', completed: false };

  onSubmit(): void {
    this.taskAdded.emit(this.task);
    this.task = { id: 0, title: '', description: '', completed: false };
  }
}
