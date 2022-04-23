import {Component, Inject, OnInit} from '@angular/core';
import {EmployeeService} from "../../model/employee.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employees: Employee[] = [];

  id: number;
  name: string;
  constructor( private employeeService: EmployeeService, private router: Router,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public snackBar: MatSnackBar) {
    this.id = data.id;
    this.name = data.name;
  }

  ngOnInit(): void {
    /*this.getEmployees();*/
  }
  /*public getEmployees(): void {
    this.employeeService.getEmployee().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
  onSubmit(id: number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        this.router.navigate(['employees']);
        this.snackBar.open("Delete successfully!", "Done");
      }, error => console.log(error)

    );
  }
  /*public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (data: void) => {
        console.log(data);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/

}
