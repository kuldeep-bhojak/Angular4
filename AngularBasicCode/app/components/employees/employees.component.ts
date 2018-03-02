import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../../services/employee.service';
import { UnderlineDirective } from '../../directives/underline.directive';
//import { ReactiveComponent } from '../reactiveForms/form.component';

// access value of form fields
// generate ngFor loop value in component

@Component({
    selector: "my-emplist",
    templateUrl: './employees.html',
    providers: [EmployeeService]
})

export class EmployeesComponent{
    title: string = "Hello from Employee list";
    id: number;
    employeeList: Employee[];
    empName: string;
    empId: number;
    stateList: Array<Object>= [{
        "id":1,
        "cities":[{
            "id": 1,
            "name": "Jaipur"
        },
        {
            "id": 2,
            "name": "Jodhpur"
        },
        {
            "id": 3,
            "name": "Bikaner"
        }],
        "name":"Rajasthan"
    },
    {
        "id":2,
        "name":"Maharastra",
        "cities":[{
            "id": 1,
            "name": "Jaipur"
        },
        {
            "id": 2,
            "name": "Jodhpur"
        },
        {
            "id": 3,
            "name": "Bikaner"
        }]
    },
    {
        "id":3,
        "name":"Punjab",
        "cities":[{
            "id": 1,
            "name": "Chandigard"
        },
        {
            "id": 2,
            "name": "Hosiyarpur"
        },
        {
            "id": 3,
            "name": "Punjab"
        }]
    },
    {
        "id":4,
        "name":"Bihar",
        "cities":[{
            "id": 1,
            "name": "Bihar 1"
        },
        {
            "id": 2,
            "name": "Bihar 2"
        },
        {
            "id": 3,
            "name": "Bihar 3"
        }]
    }];
    cityList: Array<Object>;
    constructor(private _employeeService: EmployeeService){
    
    }

    ngOnInit(){
        // this.empName = "Jill";
        this._employeeService.getData().subscribe(employees => this.employeeList = employees);
        this._employeeService.getUser();
        this.state = this.stateList[0];
    }    
    clickHandler(name: string){
        alert("From List = "+name);
    }
    addEmpClickHandler(){
        let emp = new Employee();
        emp.name = this.empName;
        emp.id = this.empId;
        this.employeeList.push(emp);
    }
    changeHandler(obj: any){
        let selectedVal = obj.target.value;
        let selectedObj = this.stateList.filter((obj) => { 
            return (obj["id"] == selectedVal);
        });
        this.cityList = selectedObj[0]["cities"];
        this.city = selectedObj[0]["cities"][0].id;
        //alert(this.cityList);
    }
}