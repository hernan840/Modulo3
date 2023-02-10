import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'; /*permite hacer llamadas get y pos al puerto 5001*/
import { Observable, of } from 'rxjs';
import {Task} from '../Task'
import {TASKS} from '../monk-tasks'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ='http://localhost:5001/tasks'

  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]>{
      return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`  //tener en cienta los `
    return this.http.delete<Task>(url)
  }
}
