import { Component, OnInit } from '@angular/core';
import { departList, User } from '../../model/user.model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  isedit: boolean = false;
  departList: departList[];
   getid: number;


   listdata:User[]
   departfilter:departList[]
  
   //for search
   userSearch: string="";
  

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.display();
    this.getdepartdata();
  }


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

    //edit 
    editData(id:number){
      console.log("hellooo");
      // this.showMe =!this.showMe
     debugger
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
