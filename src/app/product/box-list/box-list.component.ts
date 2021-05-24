import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  boxs:any;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/boxs').subscribe((data)=>{
      this.boxs=data;
      console.log(data);
    })
   
    
  }
  clickme(){
    alert("hello");
  }
  }
  