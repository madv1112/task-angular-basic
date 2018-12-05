import { Injectable } from "@angular/core";

import { Task } from "./task.model";

const TASK: Task[] = [
    {id: 1, title: 'Tarefa número 1'},
    {id: 2, title: 'Tarefa número 2 e verificando...'},
    {id: 3, title: 'Mais uma tarefa iniciada com sucesso!'},
    {id: 4, title: 'Tarefa número 4'},
    {id: 5, title: 'Tarefa número 5'},
    {id: 6, title: 'Tarefa número 6 e finalizando...'}
];

@Injectable()

export class TaskService{

    public getTasks(): Promise<{}>{

        let promise = new Promise(function(resolve, reject){
            if(TASK.length > 0){
              resolve(TASK);
            }else{
              let error_msg = "Não há informações sobre tarefas agendadas.";
              reject(error_msg)
            }
          })

          return promise;
        }

}