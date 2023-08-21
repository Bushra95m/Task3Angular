import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import{ MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import{MatDialog} from '@angular/material/dialog';
import { UpdateListComponent } from '../update-list/update-list.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  constructor(private service: AuthService, private dialog:MatDialog,private toastr:ToastrService,) {
this.Loadstudent();
  }
  studentList: any;
  dataSource:any;
  @ViewChild(MatPaginator) Paginator !:MatPaginator;
  

  Loadstudent() {
    this.service.GetAll().subscribe(res => {
      this.studentList = res;
      this.dataSource=new MatTableDataSource(this.studentList);
      this.dataSource.paginator=this.Paginator;
      
    });
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'password','role','status','action'];
  
  Updateuser(code:any){
    let popup=  this.dialog.open(UpdateListComponent,{
    enterAnimationDuration:'1000ms',
    exitAnimationDuration:'500ms',
    width:'50%',
    height:'50%',
    
   
    
   })
   
   popup.afterClosed().subscribe(res=>{
    this.Loadstudent();
    
   })
  }
  opendialog(){
    this.Loadstudent();
  }
  RemoveStudent(code:any){
    
    this.service.RemoveStudent(code).subscribe(res=>{

      this.Loadstudent();
      this.toastr.success('Delete Successfully');
    });
    

    }

    }
  
     
    
    

    
  
  
