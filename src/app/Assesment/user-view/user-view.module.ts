import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from '@angular/common/http';
import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './user-view.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserFormComponent } from '../components/user-form/user-form.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserSearchPipe } from '../pipe/user-search.pipe';
import { IdFilterPipe } from '../pipe/id-filter.pipe';

@NgModule({
  declarations: [
    UserViewComponent,
    UserListComponent,
    UserFormComponent,
    UserSearchPipe,
    IdFilterPipe
   
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  exports:[
    UserViewComponent,
    UserListComponent,
    UserFormComponent,
  ],
  providers: [
    UserService
  ]
})
export class UserViewModule { }
