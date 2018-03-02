import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
    constructor(private _http: Http){}
    getData(){
        return this._http.get('app/services/employees.json').map((response) => response.json());
    }
    getUser(){
    	var url = "https://reqres.in/api/users";
        var type= "POST";
    	var data: {
        name: "paul rudd",
        movies: ["I Love You Man", "Role Models"]
    	};
    	return this._http.post(url, data);//.subscribe(
        // res => {
        //   console.log(res);
        // },
        // err => {
        //   console.log("Error occured");
        // }
      //);
    }
}