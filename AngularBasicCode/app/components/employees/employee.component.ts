import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
    selector: 'emp',
    template: `
        
        <span (click)="clickHandler(name);">{{empid}}&nbsp;{{name | uppercase}}</span>
		<span>New changes to this file</span>
    `
})

export class EmployeeComponent{
    @Input('') empid: number;
    @Input() name: string;
    @Output() empClickEvent = new EventEmitter<string>();
    clickHandler(name: string){
        //alert("Hello from employee span==" + name);
        this.empClickEvent.emit(name);
    }
}