import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortbydoj',
  templateUrl: './sortbydoj.component.html',
  styleUrls: ['./sortbydoj.component.css']
})
export class SortbydojComponent implements OnInit {

  constructor(private http:HttpClient) { }

user:any;

  ngOnInit(): void {

    this.getUserByDob();
  }


  getUserByDob(){
    let response = this.http.get("http://localhost:8000/sort/sortbyDoj");
    response.subscribe((data)=>this.user=data);
  }

}
