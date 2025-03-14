import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-filter',
  imports:[CommonModule],
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  filterOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'pending', label: 'Pendientes' },
    { value: 'completed', label: 'Completadas' }
  ];

  selectedFilter: string = 'all';

  onFilterChange(filter: string): void {
    this.selectedFilter = filter;
    this.filterChange.emit(filter);
  }
}