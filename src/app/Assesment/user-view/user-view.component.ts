import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service';
import { departList, User  } from '../model/user.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {


  showMe: boolean = false;
  List1: FormGroup
  
  departList: departList[];
  getid: number;

  //variable for user data
  listdata:User[]
  departfilter:departList[]
 

  //for edit get id variable
  isedit: boolean = false;

  //for search
  userSearch: string = "";

  constructor(private fb:FormBuilder, private route: Router, private activeroute: ActivatedRoute,private service:UserService) {

  }

  ngOnInit():void {
    this.display();

    this.getdepart();
    this.List1=this.fb.group({
      Flist:[]
    })

  }
   //function for show form
   showForm(){
    this.showMe = !this.showMe
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
}
