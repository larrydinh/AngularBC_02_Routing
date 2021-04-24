import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HeaderComponent } from './home-template/header/header.component';
import { RouterModule, Routes } from '@angular/router';

//cấu hình route cho home module 

const HomeRoute:Routes =[
  {path:'', component:HomeTemplateComponent,
  
  children:[
    {path:'',component:HomepageComponent},
    {path:'homepage',component:HomepageComponent}
]}
]


@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute)
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
