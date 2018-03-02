import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component ({
	selector: "reactive-form",
	templateUrl: './form.component.html'
})

export class ReactiveForm {
	public captureForm: FormGroup;

	constructor(){
		this.captureForm = new FormGroup ({
    		fName: new FormControl(''),
    		foodType: new FormControl()
  		});
	}
	addNewFiledBtnHandler(){
		console.log(this.captureForm);
		//let newCtrl = new FormControl('');
		//this.captureForm.addControl("lName", new FormControl());
	}
}

