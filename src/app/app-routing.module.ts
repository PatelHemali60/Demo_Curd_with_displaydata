import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'employee', pathMatch:'full'},
  { path: 'employee', 
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) }, 
  { path: 'resumeForm', 
    loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },
  // { path: 'user', loadChildren: () => import('./modules/Assesment/user/user.module').then(m => m.UserModule) },
  { path: 'user', loadChildren: () => import('./modules/Assesment/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
