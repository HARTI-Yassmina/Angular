import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  task: Task = new Task();
  constructor(private taskService:TaskService , private router : Router){} 
  ngOnInit(): void {
      // this.taskService.getTaskById()
  }



  onSubmit(){
   console.log(this.task); 




  }
}
