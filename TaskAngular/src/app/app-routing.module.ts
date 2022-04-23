import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";
import {EmployeeHomeComponent} from "./employee/employee-home/employee-home.component";

const routes: Routes = [
  { path: 'home', component: EmployeeHomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: EmployeeCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
