import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/CompanyService.service';
import { IdFilterPipe } from './pipes/id-filter.pipe';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
   
    EmployeeFormComponent,
    EmployeeListComponent,
    IdFilterPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
   CompanyService
  ]
})
export class EmployeeModule { }
