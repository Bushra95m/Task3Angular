import { Component } from '@angular/core';
import{ FormBuilder,Validators} from '@angular/forms';
import{ ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private builder: FormBuilder, private toastr:ToastrService
  , private service:AuthService, private router:Router){


}
registerform=this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.required])),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/)])),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  gender:this.builder.control('male'),
  role:this.builder.control(''),
  isactive:this.builder.control(false)
});
Pregister(){
   
if(this.registerform.valid){
this.service.Pregister(this.registerform.value).subscribe(res=>{
  this.toastr.success('please contact admin for enable access','Registered Successfully')
  this.router.navigate(['login']);
});
}else{
  this.toastr.warning('please enter valid data');
}
}
}
