import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Cau hinh Routing
import {Routes, RouterModule} from '@angular/router'
// import { LoginComponent } from './Modules/home/login/login.component';
// import { RegisterComponent } from './Modules/home/register/register.component';
import { HomepageComponent } from './Modules/home/homepage/homepage.component';
import { HomeModule } from './Modules/home/home.module';
import { UserModule } from './Modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './_core/services/course.service';

const appRoutes:Routes =[
  // {path: 'login', component:LoginComponent},
  // {path: 'register', component:RegisterComponent},
  {path: 'home', loadChildren:()=>HomeModule},
  {path:'user',loadChildren:()=>UserModule},
  {path: '', loadChildren:()=>HomeModule},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // Router module nay se dieu huong cho the <router-outlet></router-outlet>
    RouterModule.forRoot(appRoutes), HttpClientModule
   
  ],
  providers: [CourseService], //provider là noi import các service sử dụng cho module đó 
  bootstrap: [AppComponent]
})
export class AppModule { }
