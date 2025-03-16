import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // <-- Importa FormBuilder y Validators
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  taskForm:any; // <-- Define el formulario reactivo

  task: Task = { id: 0, title: '', description: '', completed: false };

  private initForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', Validators.required],
      completed: [false],
    });
  }

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      // <-- Verifica si el formulario es válido
      const newTask: Task = {
        id: 0, // El ID se asignará en el componente principal
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: this.taskForm.value.completed,
      };
      this.taskAdded.emit(newTask); // <-- Emitir la nueva tarea
      this.taskForm.reset({ completed: false }); // <-- Resetear el formulario
    }
  }
}
