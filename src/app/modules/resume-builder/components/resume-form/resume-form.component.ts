
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from '../../services/resume.service';


@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {


  resumeForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ResumeService, private route: Router
  ) {
    this.resumeForm = this.buildForm()
  }

  ngOnInit(): void {

  }

  //building form group for form with form array
  buildForm(): FormGroup {
    return this.fb.group({

      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactNo: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      postname: new FormControl('', [Validators.required]),
      skills: this.fb.array([
        this.skillField()
      ]),
      experiences: this.fb.array([
        this.experienceField()
      ]),
      education: this.fb.array([
        this.educationField()
      ])

    })
  }

  get user() { return this.resumeForm.controls; }

  get skills(): FormArray {
    return this.resumeForm.controls['skills'] as FormArray;
  }


  // store value of expirince form array
  get experiences(): FormArray {
    return this.resumeForm.controls['experiences'] as FormArray;
  }

  // store value of  education form array
  get education(): FormArray {
    return this.resumeForm.controls['education'] as FormArray;
  }

  //use for skill array
  skillField(): FormGroup {
    return this.fb.group({
      technicalSkills: ['', Validators.required]
    })
  }

  //use for experienceFunction  value
  experienceField(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],  //keep here validation
      years: [null, Validators.required],
      post: ['', Validators.required]
    })
  }

  //creat function for education value
  educationField(): FormGroup {
    return this.fb.group({
      schoolName: [''], //keep here validation
      major: [''],
      cgpa: [''],
    })
  }


  //add skill and delte skill methods
  addSkill() {
    this.skills.push(this.skillField())
  }

  deleteSkills(index: number) {
    if (this.skills.length != 1) {
      this.skills.removeAt(index)
    }

  }


  //methods for add and delete expirince methods

  addExperince() {
    this.experiences.push(this.experienceField())
  }

  //delete expirince methods
  deleteExperince(index: number) {
    if (this.experiences.length != 1) {
      this.experiences.removeAt(index)
    }
  }

  //methods for add and delte education field
  addEducation() {
    this.education.push(this.educationField())
  }
  deleteEducation(index: number) {
    if (this.education.length != 1) {
      this.education.removeAt(index)
    }
  }


  //on Submit value for form keep in services
  onSubmit() {
    console.log(this.resumeForm.value)
    //subscribe value here of services


    //when submit form first delete data old one and submit new data on id :1 
   this.service.deleteUser().subscribe(()=>{
    this.service.saveUser(this.resumeForm.value).subscribe(()=>{
      alert("hello");
    }
    );
    this.route.navigate(['resumeForm/view'])
   })
  }


  //end of the code
}
