import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];

  constructor(
    private taskService: TaskService   /*inicializamos */
    ) {}

  ngOnInit(): void {
    //Like Promise, obtine los datos de json
    this.taskService.getTask().subscribe((tasks) =>
      {this.tasks=tasks}
    );
  }

  deleteTask(task:Task) {
    console.log("deelert!!!!");

    this.taskService.deleteTask(task).subscribe( () => {
      this.tasks = this.tasks.filter((t) => 
         {return t.id !== task.id} //con filter quitamos al elemento de la lista instanciada que tenga el id seleccionado
      )
    })
    
  }
  

}