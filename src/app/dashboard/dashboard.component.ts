import { Task } from './../tasks/shared/task.model';
import { Component, OnInit } from "@angular/core";
import { TaskService } from "../tasks/shared/task.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    
    public tasks: any = []; 

    constructor(private taskservice: TaskService){}

    ngOnInit(){

        this.taskservice.getTask()
            .then((task) => this.tasks = task);
    }
}