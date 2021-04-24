import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../home/register/register.component';

const userRoute:Routes =[
  {
    path:'', component:UserTemplateComponent,
    children:[
      {path:'',component:LoginComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent}
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    UserTemplateComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(userRoute)
   //de forChild moi hieu outlet 
  ]
})
export class UserModule { }
