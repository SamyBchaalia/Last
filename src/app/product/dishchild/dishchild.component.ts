import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { ProductService } from 'src/app/shared/product.service';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-dishchild',
  templateUrl: './dishchild.component.html',
  styleUrls: ['./dishchild.component.css']
})
export class DishchildComponent implements OnInit {

  constructor(    private storage: AngularFireStorage,
    private http: HttpClient,
    private router: Router,
    public service:ProductService,
    public notification: NotificationService,public dialogRef:MatDialogRef<DishchildComponent>) { }
shops:any;
dishs:any;
boxs:any;
test:any;
fooddescription:any;




Foodspecs:any = {name:this.service.form.get('name').value,price:this.service.form.get('price').value,description:this.service.form.get('description').value,image:this.service.form.get('image').value};

selectedimg: any = null;

ngOnInit(): void {

if(this.Foodspecs.image==='../../../assets/Insert Image.svg'){
document.getElementById('editButton').style.display='none';
}
document.getElementById('loader').style.display = "none";

if(this.Foodspecs.description.length  < 77 ) {
this.fooddescription= this.Foodspecs.description;
}
else {
this.fooddescription= this.Foodspecs.description.substring(0,77) + "..."
}



}
edit(product:any)
{
console.log(product);
}

currentJustify = 'start';

Foodname(event: any) { 
this.Foodspecs.name = event.target.value;
}
Foodprice(event: any) { 
this.Foodspecs.price = event.target.value;
}
Fooddescription(event:any){

this.Foodspecs.description= event.target.value;
if(this.Foodspecs.description.length <= 77){
this.fooddescription= this.Foodspecs.description
}
else{
this.fooddescription= this.Foodspecs.description.substring(0,77)+"..."

}


}
AddImage(event: any) {
if (event.target.files && event.target.files[0]) {
const reader = new FileReader();
reader.onload = (e: any) => (this.Foodspecs.image = e.target.result);
reader.readAsDataURL(event.target.files[0]);
this.selectedimg = event.target.files[0];
document.getElementById('editButton').style.display='block';

} else {
this.selectedimg = null;

}
}
onClear() {
this.service.form.reset();
this.service.initializeFormGroup();

}
onSubmit(){
document.getElementById('loader').style.display = "block";

if(this.selectedimg!==null){
let a= new Date();
let datenow = a.getFullYear() + "|" + a.getMonth() +"|"+ a.getDay() +" At " + a.getHours() +"h :"+ a.getMinutes()+"m :" + a.getSeconds()+"s";

var pathimg = "/TodayDishs/" + datenow + this.Foodspecs.name ;

const imgref = this.storage.ref(pathimg);
this.storage
.upload(pathimg, this.selectedimg)
.snapshotChanges()
.pipe(
finalize(() => {
imgref.getDownloadURL().subscribe((url) => {            
this.service.form.patchValue({image:url});
this.submit();

});
})
)
.subscribe();
}
else if(this.selectedimg===null){
this.submit();
}
}
submit(){

if(this.service.form.get('$key').value===null){

this.service.InsertDish(this.service.form.value);
this.service.form.reset();
this.service.initializeFormGroup();
this.notification.success("Dish Product Added Successfully");
this.onClose();

}
else{
this.service.UpdateDish(this.service.form.value);
this.service.form.reset();
this.service.initializeFormGroup();
this.notification.success("Dish Added Successfully");
this.onClose();
}

}
onClose(){
this.service.form.reset();
this.service.initializeFormGroup();
this.dialogRef.close();

}

}
