import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  imageUrl: string;

  takedata(n, p, a) {
    var obj = {
      name: n,
      password: p,
      imageUrl: a,
    };
    localStorage.setItem("cv", JSON.stringify(obj));
    this.router.navigateByUrl("/resume");

    console.log(obj);
  }
}
