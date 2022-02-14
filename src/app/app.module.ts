import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ResumeBuilderModule } from './modules/resume-builder/resume-builder.module';

@NgModule({
  declarations: [
    AppComponent,  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeBuilderModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
