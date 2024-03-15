import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root',
  
  }

)
export class TaskService {
  private URL= "http://localhost:8080/api/V1/tasks"; 
  constructor(private httpClient: HttpClient ) { }
  getTasksList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.URL);
  }
}
