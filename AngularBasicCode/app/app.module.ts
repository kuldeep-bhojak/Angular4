import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule  }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { AppComponent }  from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employees/employee.component';
import { UnderlineDirective } from './directives/underline.directive';
import { ColorDirective } from './directives/color.directive';
//import { ReactiveForm } from './components/reactiveForms/form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule ],
  declarations: [ AppComponent, EmployeesComponent, EmployeeComponent, UnderlineDirective, ColorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
