import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();


  // parametros que recibe el formulario
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription?: Subscription


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log("se ejecuta el submit??")
    if (this.text.length === 0) {
      alert("Please add a task!")  //validacion para que no guarde una tarea vacia miestra un alert
      return
    }
    
    //definimos la nueva tarea, objeto construido
  /*   const newTask ={
      text: this.text,
      day: this.day,
      reminder:this.reminder
    }/* esto es igual alo de las siguientes dos lineas pero mas simplificada*/
    const { text, day, reminder } = this
    const newTask = { text, day, reminder }

    this.onAddTask.emit(newTask);

  }
}
