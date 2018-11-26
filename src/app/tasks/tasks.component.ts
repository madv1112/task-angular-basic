import { Component, OnInit } from "@angular/core";

const TASK: Array<any> = [
    {id: 1, title: 'Tarefa número 1'},
    {id: 2, title: 'Tarefa número 2'},
    {id: 3, title: 'Tarefa número 3'},
    {id: 4, title: 'Tarefa número 4'},
    {id: 5, title: 'Tarefa número 5'},
    {id: 6, title: 'Tarefa número 6'}
]

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TaskComponent implements OnInit{

    task;

    ngOnInit(){
        this.task = TASK;
    }
}