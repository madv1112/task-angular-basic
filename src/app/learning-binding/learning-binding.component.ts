import { Component } from "@angular/core";

@Component({
    selector: 'learning-binding',
    templateUrl: 'learning-binding.component.html'
})

export class LearningBindingComponent{

    public onClick(){
        console.log('Evento do click disparado!');
    }

    public onMouseOver(){
        console.log('Evento do mouse disparado!');
    }
}