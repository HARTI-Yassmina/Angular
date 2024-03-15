import { Component } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common'; 
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule , HttpClientModule  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[];
  constructor(private taskService: TaskService){}
  ngOnInit(): void {
    this.getTasks();

  }
  private getTasks(){
    this.taskService.getTasksList().subscribe(data => {
      this.tasks = data ; 
    }); 
  }
}
