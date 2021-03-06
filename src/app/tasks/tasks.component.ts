import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";

const TASK: Array<Task> = [
    {id: 1, title: 'Tarefa número 1'},
    {id: 2, title: 'Tarefa número 2 e verificando...'},
    {id: 3, title: 'Mais uma tarefa iniciada com sucesso!'},
    {id: 4, title: 'Tarefa número 4'},
    {id: 5, title: 'Tarefa número 5'},
    {id: 6, title: 'Tarefa número 6 e finalizando...'}
]

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TaskComponent implements OnInit{

    public tasks;
    public selectedTask: Task;

    ngOnInit(){
        this.tasks = TASK;
    }

    onSelect(task: Task): void{
        this.selectedTask = task;
    }
}