import { Component, OnInit } from '@angular/core';
import { ResumeBuilder } from '../../modal/resume.modal';

import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

 //define modal name 
  resumeForm:ResumeBuilder;

  constructor(private resume:ResumeService) { 

  }

  ngOnInit(): void {
    this.resume.getUserData().subscribe((resumedata)=>{
        this.resumeForm = resumedata
    })
    

  }

}
