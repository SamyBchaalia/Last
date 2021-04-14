import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-landing-roles',
  templateUrl: './landing-roles.component.html',
  styleUrls: ['./landing-roles.component.css']
})
export class LandingRolesComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  user:any;
  ngOnInit(): void {
    this.http.post(`http://localhost:3000/login`,{username:"sami",password:"123"}).subscribe((data) => {
      console.log(data);
      this.user=data[0];
      if(data[0].student===1){console.log("this is a student");}
    });
  }

}
