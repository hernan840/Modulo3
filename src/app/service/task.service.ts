import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /*permite hacer llamadas get y pos al puerto 5001*/
import { Observable, of } from 'rxjs';
import { Task } from '../Task'
import { TASKS } from '../monk-tasks'

// con esto decimos que estamos enviando un json al servidor o backend
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5001/tasks'

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`  //tener en cuenta el tipo de comilla `
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`  //tener en cienta los `
    return this.http.put<Task>(url, task, httpOptions)
  }
  // post cuando crea algo nuevo
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

}
