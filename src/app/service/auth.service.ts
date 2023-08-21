import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  apiurl='http://localhost:3000/student';

GetAll(){
  return this.http.get(this.apiurl);
}

Getbycode(code:any){
  return this.http.get(this.apiurl+'/'+code);
}
Pregister(inputdata:any){
  return this.http.post(this.apiurl,inputdata);

}
Updateuser(code:any,inputdata:any){
  
  return this.http.post(this.apiurl+'/',code,inputdata);
//}
//Updatestudent(inputdata:any){
  
 // return this.http.post(this.apiurl+'/role',inputdata);
 //return this.http.post(this.apiurl+'/',inputdata);
}
  RemoveStudent(code:any){
return this.http.delete(this.apiurl+'/'+code);
  }
 
    


IsloggedIn(){
  return sessionStorage.getItem('username')!=null;
}
//GetUserrole(){
//return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userole')?.toString():'';
//}
}
