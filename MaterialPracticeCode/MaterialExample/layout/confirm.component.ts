import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'confirm-page',
    templateUrl: 'confirm.component.html'
})

export class ConfirmComponent{
    @Output() startJourney = new EventEmitter<String>();  
    startOverClick(){
        this.startJourney.emit();
    }
}