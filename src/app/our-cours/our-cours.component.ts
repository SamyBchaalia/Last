import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-our-cours',
  templateUrl: './our-cours.component.html',
  styleUrls: ['./our-cours.component.css']
})
export class OurCoursComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
courses:any;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/allcourses").subscribe((data) => {
      console.log(data);
      this.courses = data;

    });
  }
ViewMangeCours(id){
  localStorage.setItem("coursId",id);
  this.router.navigateByUrl("CoursCreator/cours");
}
addCours(title,imageUrl,description){
console.log("bonjour");
this.http.post("http://localhost:3000/Cours",{nameCours:title,imageUrl:imageUrl,description:description,Creator:"Admin"}).subscribe((data)=>{
console.log("created");
this.http.get("http://localhost:3000/allcourses").subscribe((data) => {
      console.log(data);
      this.courses = data;

    });
});
}

}
