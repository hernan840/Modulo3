import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';
import { TASKS } from '../../monk-tasks';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit{
  @Input() task: Task =TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  aTimes = faTimes;

  constructor(){}

  ngOnInit(): void {
  }

  onDelete(task: Task){
    // console.log(task)
    this.onDeleteTask.emit(task);

  }

  onToggle(task: Task){
    // console.log(task)
    this.onToggleReminder.emit(task);

  }

}
