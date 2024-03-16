import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Route, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  id : number ; 
  task: Task = new Task();
  constructor(private taskService:TaskService , private router : Router , private activatedRoute : ActivatedRoute
    ){} 
    ngOnInit(): void {
      this.task = new Task(); 
      this.id = this.activatedRoute.snapshot.params['id']; 
      this.taskService.getTaskById(this.id).subscribe(data =>{
        console.log(data)
        this.task = data; 
      } ,
      error=> console.log(error));
      
   


    }
    

  goToTaskList(){
    this.router.navigate(['/tasks']); 
}

  onSubmit(){
   this.taskService.updateTask(this.id , this.task).subscribe( data =>{
    this.goToTaskList();
   },
   error=> console.log(error));
   

  }
}
