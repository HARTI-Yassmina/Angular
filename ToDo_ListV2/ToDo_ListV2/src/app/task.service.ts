import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
  
  }

)
export class TaskService {
  private URL= "http://localhost:8080/api/V1/tasks"; 
  constructor(private httpClient: HttpClient ) { }
  getTasksList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.URL}`); 
  }

  createTask(task: Task): Observable<Object>{
    return this.httpClient.post(`${this.URL}`, task)
  }

  getTaskById(id:number): Observable<Task>{
      return this.httpClient.get<Task>(`${this.URL}/${id}`); 
  }

  updateTask(id: number , task : Task ): Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`, task); 

  }
  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`); 

  }
  completeTask(id: number , task : Task ): Observable<Task>{
    return this.httpClient.put(`${this.URL}/complete/${id}`, task).pipe(
      map(response => response as Task)
      );

  }
}
 