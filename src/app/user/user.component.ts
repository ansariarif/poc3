import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.getAllUser();
   
  }


  getAllUser(){
    let response = this.http.get("http://localhost:8000/users");
    response.subscribe((data)=>this.user=data);
  }





  deleteUser(id:number,index:number){

      this.http.delete("http://localhost:8000/delete/users/"+id).subscribe((data)=>{this.user.splice(index,1)});
      
     }



}
