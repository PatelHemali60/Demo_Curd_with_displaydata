import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IdFilterPipe } from '../pipes/id-filter.pipe';
import { UserSearchPipe } from '../pipes/user-search.pipe';





@NgModule({
  declarations: [
    UserComponent,
    IdFilterPipe,
    UserSearchPipe

    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
