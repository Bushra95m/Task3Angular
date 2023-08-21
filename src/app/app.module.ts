import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import{HttpClientModule} from '@angular/common/http'
import{ToastrModule} from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateListComponent } from './update-list/update-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    StudentListComponent,
    UpdateListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
 BrowserAnimationsModule,
 ReactiveFormsModule,
 HttpClientModule,
 ToastrModule.forRoot(),
 

    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
