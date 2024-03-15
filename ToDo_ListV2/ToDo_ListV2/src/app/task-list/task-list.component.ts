import { Component } from '@angular/core';
import { Task } from '../task';

import { HttpClient , HttpClientModule } from '@angular/common/http';
import { TaskService } from '../task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[];
  constructor(private taskService: TaskService , private router : Router){}
  ngOnInit(): void {
    this.getTasks();

  }
  private getTasks(){
    this.taskService.getTasksList().subscribe(data => {
      this.tasks = data ; 
    }); 
  } 
  updateTask(id: number){
    this.router.navigate(['update-task',id]); 
  }
}
