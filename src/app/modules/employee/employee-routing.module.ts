import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  {path:'',
    children:[
      {path:'', redirectTo:'list', pathMatch:'full'},
      { path:'list', component:EmployeeListComponent},
      { path:'form', component:EmployeeFormComponent},
      { path:'edit/:id', component:EmployeeFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
