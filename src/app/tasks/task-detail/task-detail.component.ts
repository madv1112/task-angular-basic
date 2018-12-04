import { Component, Input } from '@angular/core';

import { TaskComponent } from './../tasks.component';
import { Task } from './../shared/task.model';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent{

    @Input() public task: Task;

    constructor(){}
}