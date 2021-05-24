import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module"
import {ProductRoutingModule} from "./product-routing.module"
import { WrapperComponentComponent } from './wrapper-component/wrapper-component.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product.component';
import { ProductchildComponent } from './productchild/productchild.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { ColorSketchModule } from 'ngx-color/sketch';

import player from 'lottie-web';


// import { AngularFireModule } from "@angular/fire";
// import { AngularFireStorageModule } from "@angular/fire/storage";
// import { AngularFireStorageReference} from "@angular/fire/storage/ref"
// import {AngularFireUploadTask} from "@angular/fire/storage/task"
// import { StorageBucket} from "@angular/fire/storage/"
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";
import {environment} from "../../environments/environment";
import { PopupComponent } from '../popup/popup.component';
import { from } from 'rxjs';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishchildComponent } from './dishchild/dishchild.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxchildComponent } from './boxchild/boxchild.component';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [WrapperComponentComponent,ProductsListComponent,ProductComponent,ProductchildComponent,PopupComponent, DishListComponent, DishchildComponent, BoxListComponent, BoxchildComponent],
  imports: [
    AngularFireStorageModule,ColorSketchModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), CommonModule,ProductRoutingModule,MaterialModule,ReactiveFormsModule,FormsModule,   HttpClientModule,AngularFireStorageModule

  ],
})
export class ProductModule { }
