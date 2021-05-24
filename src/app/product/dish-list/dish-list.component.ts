import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { from } from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';
import {DishchildComponent} from "../dishchild/dishchild.component"

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  constructor(private service:ProductService,private http:HttpClient,private dialog:MatDialog) { }
  TodayDishes:any;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/dishs').subscribe((data)=>{
      this.TodayDishes=data;
      console.log(data);
    })
   
    
  }
  onCreate(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="68%";
    dialogconfig.height="90%";
  const dialogref=this.dialog.open(DishchildComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });  }
  onEdit(dish){
    console.log("edit started");
    this.service.complete(dish);
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="70%";
    dialogconfig.height="90%";
    const dialogref=this.dialog.open(DishchildComponent,dialogconfig);
    dialogref.afterClosed().subscribe((result)=>{
      this.ngOnInit();
    });
    
    }

    onDelete(dish){
      this.service.DeleteDish(dish.id).subscribe((data)=>{
        this.ngOnInit();
      });
    }
  }