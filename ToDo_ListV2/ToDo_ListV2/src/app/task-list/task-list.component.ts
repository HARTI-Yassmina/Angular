import { Component } from '@angular/core';
import { Task } from '../task';
import {ActivatedRoute} from '@angular/router'; 

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
  id : number ; 
  task: Task = new Task();
  constructor(private taskService: TaskService , private router : Router , private activatedRoute : ActivatedRoute){}
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
  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasks();  
    });
  }
  completeTask(id: number){
    this.task = new Task(); 
      this.id = this.activatedRoute.snapshot.params['id']; 
    this.taskService.completeTask(id, this.task).subscribe(updatedTask  =>{
      
      this.task = updatedTask  ; 
      this.getTasks();
    })  ;
  }
}
