import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    providers: [ TaskService ]
})

export class TaskComponent implements OnInit{

    public tasks: any = [];
    public selectedTask: Task;

    public constructor(private taskService: TaskService){}

    ngOnInit(){
        this.taskService.getTasks()
            .then((task) => this.tasks = task)
            .catch((error_msg) => {
                alert(error_msg);
            })
            
    }

    onSelect(task: Task): void{
        this.selectedTask = task;
    }
}