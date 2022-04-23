import { Component, OnInit } from '@angular/core';
import {EmployeeType} from "../../model/employee-type";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../model/employee.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeTypes : EmployeeType[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              public snackBar: MatSnackBar) {
  }
  createEmployee = new FormGroup({
      /*id: new FormControl('',[Validators.required]),*/
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      employeeType:new FormControl('',[Validators.required]),
      imageUrl:new FormControl('',[Validators.required]),
    }

  )

  ngOnInit(): void {
    this.getAllCustomerTypeList();
  }
  getAllCustomerTypeList(){
  this.employeeService.getEmployeeType().subscribe((data)=>{
      console.log(data);
      this.employeeTypes = data;
  })
  }

  addCustomer() {
    this.employeeService.addEmployee(this.createEmployee.value).subscribe((data)=>{
      this.router.navigateByUrl('employees');
      this.snackBar.open("Create successfully!", "Done");
    }, error => console.log(error))
  }
}
