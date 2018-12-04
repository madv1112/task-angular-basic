import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    providers: [ TaskService ]
})

export class TaskComponent implements OnInit{

    public tasks: Array<Task>;
    public selectedTask: Task;
    public taskService: TaskService;

    public constructor(taskService: TaskService){
        this.taskService = taskService;
    }

    ngOnInit(){
        this.tasks = this.taskService.getTasks();
    }

    onSelect(task: Task): void{
        this.selectedTask = task;
    }
}