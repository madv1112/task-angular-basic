import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primeiro test!';
  task: Task = new Task(1605, 'Gerenciando arquivos para o cliente!');
}

export class Task{

  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title
  }
}
