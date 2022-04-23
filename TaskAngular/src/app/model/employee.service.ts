import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {EmployeeType} from "./employee-type";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly usersUrl = 'http://localhost:8080/employees';
  private readonly UrlEmployeeType = 'http://localhost:8080/employees/employeeType';

  constructor(private http: HttpClient) {

  }

  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.usersUrl);
  }

  public getEmployeeType(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(this.UrlEmployeeType);
  }

  public addEmployee(employee: Employee): Observable<void> {
    return this.http.post<void>(this.usersUrl + "/add", employee);
  }

  public updateEmployee(updateCustomer: Employee): Observable<void> {
    return this.http.put<void>(this.usersUrl + '/update/{id}' + updateCustomer.id, updateCustomer);
  }


  public deleteEmployee(id:number) {
    return this.http.delete(this.usersUrl + '/delete/' + id);
  }

  public findCustomerById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.usersUrl + '/' + (id));
  }
  /*public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(this.usersUrl + '/delete/' + employeeId);
  }*/
  /*private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }
*/

}
