"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_1 = require("./employee");
var employee_service_1 = require("../../services/employee.service");
//import { ReactiveComponent } from '../reactiveForms/form.component';
// access value of form fields
// generate ngFor loop value in component
var EmployeesComponent = (function () {
    function EmployeesComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.title = "Hello from Employee list";
        this.stateList = [{
                "id": 1,
                "cities": [{
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
                "name": "Rajasthan"
            },
            {
                "id": 2,
                "name": "Maharastra",
                "cities": [{
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
                "id": 3,
                "name": "Punjab",
                "cities": [{
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
                "id": 4,
                "name": "Bihar",
                "cities": [{
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
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.empName = "Jill";
        this._employeeService.getData().subscribe(function (employees) { return _this.employeeList = employees; });
        this._employeeService.getUser();
        this.state = this.stateList[0];
    };
    EmployeesComponent.prototype.clickHandler = function (name) {
        alert("From List = " + name);
    };
    EmployeesComponent.prototype.addEmpClickHandler = function () {
        var emp = new employee_1.Employee();
        emp.name = this.empName;
        emp.id = this.empId;
        this.employeeList.push(emp);
    };
    EmployeesComponent.prototype.changeHandler = function (obj) {
        var selectedVal = obj.target.value;
        var selectedObj = this.stateList.filter(function (obj) {
            return (obj["id"] == selectedVal);
        });
        this.cityList = selectedObj[0]["cities"];
        this.city = selectedObj[0]["cities"][0].id;
        //alert(this.cityList);
    };
    return EmployeesComponent;
}());
EmployeesComponent = __decorate([
    core_1.Component({
        selector: "my-emplist",
        templateUrl: './employees.html',
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeesComponent);
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map