import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User ,departList } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  showMe:boolean= false;
  useradd: FormGroup

  //var for list
  listdata:User[];

  //var for list
  departList: departList[];

  //var for pipe
  departfilter:departList[];

  getid: number;
  isedit: any;

  constructor(private bob:FormBuilder, private service:UserService ,private route:Router, private activeroute:ActivatedRoute ) {

    this.useradd = this.Addform();
   }

  ngOnInit(){

     //get department data display
     this.getdepart()

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
 //end of the ng onit



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
  updata() {
    throw new Error('Method not implemented.');
  }

   //get method for get form value
   get user() { return this.useradd.controls; }

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

    editData(id:number){
      console.log("hellooo");

      
      // this.showMe =!this.showMe

      // this.service.getbyid(id).subscribe((editData)=>{
      //   this.useradd.patchValue(editData);
      // })
  
    }
  
  
}
