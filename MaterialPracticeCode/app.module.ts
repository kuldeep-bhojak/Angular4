import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';

import { SimpleTextBoxComponent } from './MaterialExample/FormFields/SimpleTextBox.componet';
import { CreateUserComponent } from './MaterialExample/layout/createuser.component';
import { CaptureComponent } from './MaterialExample/layout/capture.component';
import { VerifyComponent } from './MaterialExample/layout/verify.component';
import { ConfirmComponent } from './MaterialExample/layout/confirm.component';




@NgModule({
  declarations: [
    AppComponent,
    SimpleTextBoxComponent,
    CreateUserComponent,
    CaptureComponent,
    VerifyComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
