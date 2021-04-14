import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
@Component({
  selector: "app-one-cours",
  templateUrl: "./one-cours.component.html",
  styleUrls: ["./one-cours.component.css"],
})
export class OneCoursComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient,private sanitizer: DomSanitizer) {}
  id: any = localStorage.getItem("Cid");
  safeSrc: SafeResourceUrl;
  data: any;
  ngOnInit(): void {
    this.http
      .get(`http://localhost:3000/oneCours/${this.id}`)
      .subscribe((data) => {
        console.log(data);
        this.data = data[0];
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(data[0].videoUrl);
      });
  }
  moveto(to) {
    this.router.navigateByUrl("/" + to);
  }
}
