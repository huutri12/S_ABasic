import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../model/employee.service";
import {EmployeeDeleteComponent} from "../employee-delete/employee-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  p:number =1;
  firstName:any;
  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(
      (data) => {
      console.log(data);
      this.employees = data;
      }
    )
  }
  openDelete(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      (data) =>{
        console.log("xoa thanh cong");
      }
    )

  }

  Search(){
    if (this.firstName == ""){
      this.ngOnInit();
    }else {
      this.employees = this.employees.filter(res => {
        return res.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }
  key:string = 'id';
  reverse:boolean = false;
  // @ts-ignore
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }



  /*openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(EmployeeDeleteComponent,
      {data: {
          id
        },
        width: '400px',
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }*/

  /*public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }*/

}
