import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { departList , User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 //variable for show the content
  showMe:boolean= false;
  useradd: FormGroup;

  //for edit get id variable
 isedit: boolean = false;
 departList: departList[];
  getid: number;

  //variable for user data
  listdata:User[]
  departfilter:departList[]
 
  //for search
  userSearch: string="";
 
  constructor(private bob: FormBuilder,private  service: UserService ,private route: Router,private activeroute:ActivatedRoute) { 
    this.useradd = this.Addform();
  }

  ngOnInit(): void {

    //get department data display
    this.getdepart();

    //functionf fro display data
    this.display();

   
    this.getid = this.activeroute.snapshot.params['id'];
    if (this.getid) {
      this.service.getbyid(this.getid).subscribe((userData) => {
        this.useradd.patchValue(userData);
      },(error)=>{
         alert(" error occur");
      });
    }
  }
  
  //function for show form
  showForm(){
    this.showMe =!this.showMe
  }



  Addform() {
    return this.bob.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        Email: ['', [Validators.required, Validators.email]],
       departList: ['', [Validators.required]],
      }
    )
  }

//save data on form
  savedata() {
    this.service.postdata(this.useradd.value).subscribe(() => {
      alert('Data is Saved')
     
    })
  }

  onsubmit() {
    console.warn(this.useradd.value)
    if (this.isedit) {
      this.updata();
    } else {
      this.savedata();
    }
  }

  //edit 
  editData(id:number){
    console.log("hrllooo");
    this.showMe =!this.showMe
    this.service.getbyid(id).subscribe((editData)=>{
      this.useradd.patchValue(editData);
    })

  }

  //get method for get form value
  get user() { return this.useradd.controls; }

   updata() {
    this.service.updatedata(this.getid, this.useradd.value).subscribe(() => {
      alert('Data is Updated')
      
    })
  }



   //get department subscribe for value of listin from
   getdepart() {
    this.service.getdepart().subscribe((List) => {
      this.departList = List;
    })
  }

  //value of form display in table
  display()
  {
    this.service.getdata().subscribe(userData => {
      this.listdata = userData
    })
  }

  //get list form datbase and display dat in table
  getdepartdata(){
    this.service.getdepart().subscribe((depratList) => {
      this.departfilter = depratList
    })
  }


  //delete data form table
  deletedata(id:number)
  {
    this.service.deldata(id).subscribe(() =>{
      alert('Data is Deleted');
      this.display();
    })
  }



}
