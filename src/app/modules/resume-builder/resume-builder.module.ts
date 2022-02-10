import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResumeService } from './services/resume.service';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeFormComponent,
    ResumeViewComponent,
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    ResumeService
  ]
 
})
export class ResumeBuilderModule { }
