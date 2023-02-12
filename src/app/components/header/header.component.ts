import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

//UiService se  usa para poder escuchar cunado se hace click en el boton
//al otro componente

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  title:string = 'My Task List';
  showAddTask:boolean = true;
  subscription?: Subscription;


  constructor(private uiService:UiService){
    //para que cambie el btn al precionar 
    this.subscription = this.uiService.onToggle().subscribe((value) => 
              this.showAddTask = value)
  }
  ngOnInit(): void {
    
  }

  toggelAddTask(){
    // console.log("toggelAddTask!!");
    this.uiService.toggleAddTask(); //para que cambie el valor del toggel
  }

}
