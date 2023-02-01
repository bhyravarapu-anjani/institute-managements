import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AllStudentsTableComponent } from './components/all-students-table/all-students-table.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateGuard } from './guards/authenticate.guard';



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthenticateGuard] , children:[
    {path:"create-student",component:CreateStudentComponent},
    {path:"All-students-table",component:AllStudentsTableComponent},
    
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
