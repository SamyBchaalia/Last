import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cours-cours-creator-view',
  templateUrl: './cours-cours-creator-view.component.html',
  styleUrls: ['./cours-cours-creator-view.component.css']
})
export class CoursCoursCreatorViewComponent implements OnInit {
coursid:any=localStorage.getItem("coursId");
cours:any;
modules:any;
  constructor(private router: Router, private http: HttpClient,private sanitizer: DomSanitizer) { }
  safeSrc:any;
  ngOnInit(): void {
  
    
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/I8qqgVVlN8I");
    this.http.get(`http://localhost:3000/oneCours/${this.coursid}`).subscribe((data) => {
      console.log(data);
      this.cours = data[0];
      this.http.post(`http://localhost:3000/Modules`,{coursId:this.cours.id}).subscribe((data) => {
      console.log(data);
      this.modules = data;
      let array =new Array;
      for(let module of this.modules)
      {
        this.http.post("http://localhost:3000/paragraphs",{ModuleId:module.id}).subscribe((data) => {
          console.log(data);
          module.paragraphs=data;
          array.push(module);
        });     
       }
       this.modules=array;
       console.log("last" ,array);
    });

    });
    
  }
  addModuleProcess() {
    document.getElementById("id01").style.display = "block";
  }
  addModule(titl,video){
    console.log("title",titl);
    this.http.post("http://localhost:3000/addModule", {title:titl,videoUrl:video,coursId:this.cours.id}).subscribe((data) => {
      console.log(data);
      this.http.post(`http://localhost:3000/Modules`,{coursId:this.cours.id}).subscribe((data) => {
      console.log(data);
      this.modules = data;
    });
    });
  }
  addParagraph(title,imageUrl,content,id)
  {
    console.log("title :",title,"imageUrl",imageUrl,"content",content,"ModuleId",id);
    this.http.post("http://localhost:3000/addParagraph", {title:title ,imageUrl:imageUrl,content:content,ModuleId:id}).subscribe((data) => {
      console.log(data);
      let array =new Array;
      for(let module of this.modules)
      {
        this.http.post("http://localhost:3000/paragraphs",{ModuleId:module.id}).subscribe((data) => {
          console.log(data);
          module.paragraphs=data;
          array.push(module);
        });     
       }
       this.modules=array;
      
    });
  }
}
