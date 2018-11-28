import { Component } from "@angular/core";

@Component({
    selector: 'learning-binding',
    templateUrl: 'learning-binding.component.html'
})

export class LearningBindingComponent{

    public userName: string;
    public userEmail: string;

    constructor(){
        this.userName = "Nome Inicial";
        this.userEmail = "user email"
    }

    public onClick(){
        console.log('Evento do click disparado!');
    }

    public onMouseOver(){
        console.log('Evento do mouse disparado!');
    }

    public onKeyUp(event: any){
        console.log();
        this.userName = event.target.value;
    }
}