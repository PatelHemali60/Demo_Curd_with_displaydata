import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department, User } from '../../models/employee.model';
import { CompanyService } from '../../services/CompanyService.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  listdata:User[]
  departfilter:Department[]
  useradd:FormGroup[]
  search: string="";


  constructor(private employeeS:CompanyService) { }

  ngOnInit(): void {
    this.getdepartdata()
    this.display();
  }

  display()
  {
    this.employeeS.getdata().subscribe(userData => {
      this.listdata = userData
    })
  }

  getdepartdata(){
    this.employeeS.getdepart().subscribe((depratList) => {
      this.departfilter = depratList
    })
  }

  deletedata(id:number)
  {
    this.employeeS.deldata(id).subscribe(() =>{
      alert('Data is Deleted');
      this.display();
    })
  }

 


}
