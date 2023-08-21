import { Component } from '@angular/core';
import{ FormBuilder,Validators} from '@angular/forms';
import{ ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr:ToastrService
    , private service:AuthService, private router:Router){

      sessionStorage.clear();
}
studentdata :any;
loginform=this.builder.group({
  username:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
});
Plogin(){
    this.service.Getbycode(this.loginform.value.username).subscribe(res=>{
     this.studentdata=res;
     console.log(this.studentdata);
     if(this.studentdata.password===this.loginform.value.password){
      if(this.studentdata.isactive){
        sessionStorage.setItem('username',this.studentdata.id);
        sessionStorage.setItem('Studentrole',this.studentdata.role);
        this.router.navigate([''])
      }else{
        this.toastr.error('Please contact admin','In Active User');
      }
    
     }else{
      this.toastr.error('Invalid credentials');

     }
    
     
    });
  
  }
}


