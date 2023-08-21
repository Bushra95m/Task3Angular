import { Component,OnInit,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import{MAT_DIALOG_DATA,MatDialogRef}from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
  updateform: FormGroup;
  editdata:any;
 studentList:any;
  constructor(private builder: FormBuilder, private service:AuthService,private toastr:ToastrService, private dialog: MatDialogRef<UpdateListComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){

  
  this.updateform = this.builder.group({
    id:this.builder.control('',Validators.required),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.required),
  gender:this.builder.control('',Validators.required),
  role:this.builder.control('',Validators.required),
  isactive:this.builder.control('',Validators.required),
  });


    
  }
  ngOnInit(): void {
    this.service.Getbycode(this.updateform.value.id).subscribe(res=>{
      this.editdata=res;
      this.updateform.setValue({id:this.editdata.id,name:this.editdata.name,password:this.editdata.password,email:this.editdata.email,gender:this.editdata.gender,role:this.editdata.role,isactive:this.editdata.isactive})
            });
    
  }
 
  onUpdateClick() {
  if(this.updateform.value.id){
this.service.Updateuser(this.updateform.value.id,this.updateform.value).subscribe(res=>{

  this.toastr.success('User data updated successfully.');

  
  
  
  

  this.dialog.close();
}); 
    }
    else {
      this.toastr.warning('An error occurred while updating user data.');
      
    }
  
  
}

onCancelClick(): void {
  this.dialog.close();
}
  

  
}

  




