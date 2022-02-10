import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/employee.model';

import { CompanyService } from '../../services/CompanyService.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  isedit: boolean = false;
  department: Department[];
  getid: number;
  useradd: FormGroup;
  constructor(private route: Router, private bob: FormBuilder, private service: CompanyService, private activeroute: ActivatedRoute) {
    this.useradd = this.garbage();

  }

  ngOnInit(): void {

    this.getdepart()

    this.getid = this.activeroute.snapshot.params['id'];
    if (this.getid) {
      this.service.getbyid(this.getid).subscribe((userData) => {
        this.useradd.patchValue(userData);
      },(error)=>{
         alert(" error occur");
      });
    }
  }

  garbage() {
    return this.bob.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        lastName: ['', [Validators.required, Validators.minLength(5)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
        Email: ['', [Validators.required, Validators.email]],
        Age: ['', [Validators.required, Validators.maxLength(2)]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        departList: ['', [Validators.required]],
      }
    )
  }



  savedata() {
    this.service.postdata(this.useradd.value).subscribe(() => {
      alert('Data is Saved')
      this.route.navigate(['/employee/list']);
    })
  }

  onsubmit() {
    if (this.isedit) {
      this.updata();
    } else {
      this.savedata();
    }
  }

  updata() {
    this.service.updatedata(this.getid, this.useradd.value).subscribe(() => {
      alert('Data is Updated')
      this.route.navigate(['/employee/list']);
    })
  }



  get firstName() { return this.useradd.get('firstname') }
  get lastName() { return this.useradd.get('lastname') }
  get phoneNumber() { return this.useradd.get('phone') }
  get Email() { return this.useradd.get('Email') }
  get Age() { return this.useradd.get('age') }
  get gender() { return this.useradd.get('gender') }
  get dob() { return this.useradd.get('birth') }
  get departList() { return this.useradd.get('depart') }


  getdepart() {
    this.service.getdepart().subscribe((List) => {
      this.department = List;
    })
  }

}
