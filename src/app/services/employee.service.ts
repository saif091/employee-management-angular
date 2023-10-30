import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }
  addEmploye(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/employees",data);
  }
  getEmployee():Observable<any>{
    return this._http.get("http://localhost:3000/employees")
  }
  deleteEmployee(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/employees/${id}`)
  }
  updateEmployee(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/employees/${id}`,data);
  }

}
