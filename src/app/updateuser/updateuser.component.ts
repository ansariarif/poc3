import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private router:Router) { }

  name:any;

  user:any={name:"",surname:"",pincode:0,doj:new Date(),dob:new Date(),email:"",phoneno:0,active:"",password:""};
  
  ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      this.name = params.get('name');
     
    })
   this.getUserByName(this.name);
  }


  getUserByName(name:string){
   
      this.http.get("http://localhost:8000/usersbyname/"+name).subscribe((data:any)=>{
        this.user=data[0];
        console.log(this.user);
      // this.user.name=data[0].name;
      // this.user.surname=data[0].surname;
      // this.user.pincode=data[0].pincode;
      // this.user.email=data[0].email;
      // this.user.password=data[0].password;
      // this.user.phoneno=data[0].phoneno;
      // this.user.dob=data[0].dob;
      // this.user.doj=data[0].doj;
      // this.user.active=data[0].active;
      // console.log(this.user);
    });


  }

  updateUser(id:number){

    this.http.put("http://localhost:8000/update/users/"+id,this.user,{responseType:'text' as 'json'})
    .subscribe((data:any)=>{this.user=data[0]});
    console.log(this.user);
    this.router.navigate(['/']);
      
  }

  // deleteUser(id:number){

  //   this.http.delete("http://localhost:8000/update/users/"+id).subscribe();
    
  // }

}
