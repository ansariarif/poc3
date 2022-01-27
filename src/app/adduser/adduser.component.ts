import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }
  
  user:any={name:"",surname:"",pincode:0,doj:new Date(),dob:new Date(),email:"",phoneno:0,active:"",password:""};

  public addEmployee(){
    this.http.post("http://localhost:8000/add/users",this.user,{responseType:'text' as 'json'}).subscribe((data) => console.log(data));
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
