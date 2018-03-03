import { Component } from '@angular/core';
import { CaptureComponent } from './capture.component';
import { VerifyComponent } from './verify.component';
import { ConfirmComponent } from './confirm.component';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'create-user',
    templateUrl: 'createuser.component.html'
})

export class CreateUserComponent{
    user: string = "Guest";
    startJourney(stepper: MatStepper){
        stepper.selectedIndex = 0;
    }
}