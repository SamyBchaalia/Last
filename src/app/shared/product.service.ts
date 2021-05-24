import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  ProductList:any;
  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    name : new FormControl('Product name',Validators.required),
    description : new FormControl('Please make sure that your text wont be longer than this place holder for better user experience'),
    image : new FormControl('../../../assets/Insert Image.svg'),
    quantity: new FormControl(0),
    price : new FormControl(10)
 
  });
  boxform:FormGroup=new FormGroup({
    $key:new FormControl(null),
    name : new FormControl('Product name',Validators.required),
    description : new FormControl('Please make sure that your text wont be longer than this place holder for better user experience'),
    image : new FormControl('../../../assets/Insert Image.svg'),
    quantity: new FormControl(0),
    price : new FormControl(10),
    color: new FormControl('#000'),
    cover: new FormControl('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png')

  })
  dishForm:FormGroup=new FormGroup({
    $key:new FormControl(null),
    name : new FormControl('Product name',Validators.required),
    description : new FormControl('Please make sure that your text wont be longer than this place holder for better user experience'),
    image : new FormControl('../../../assets/Insert Image.svg'),
    quantity: new FormControl(0),
    price : new FormControl(10)
  });
  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      name: '',
      description: '',
      image: '../../../assets/Insert Image.svg',
      quantity: 0,
      price: 1
    });
  

  }
  initializeBoxFormGroup(){
    this.boxform.setValue({
      $key: null,
      name: '',
      description: '',
      image: '../../../assets/Insert Image.svg',
      quantity: 0,
      price: 1,
      color:'#000',
      cover:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png'
    });
  

  }
  //////////////Shops Functions /////////
getProducts(){
    return this.http.get(`http://localhost:8080/api/shops`);}
InsertProduct(Product:any){
  let ProductInsert={name:Product.name,description:Product.description,image:Product.image,quantity:Product.quantity,price:Product.price}
  this.http.post(`http://localhost:8080/api/shop`,ProductInsert,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  })
}
UpdateProduct(Product){
  this.http.put(`http://localhost:8080/api/shop/`+Product.$key,Product,{responseType:"text"}).subscribe((data)=>{
    console.log(data);
  })
}
DeleteProduct($key){
  console.log($key);
  return this.http.delete(`http://localhost:8080/api/shop/${$key}`,{responseType:"text"});
}
  
complete(Product){
  this.form.setValue({
    $key:Product.id,
    name:Product.name,
    description:Product.description,
    image:Product.image,
    quantity:Product.quantity,
    price:Product.price
  });

}
completeBox(box){
  this.boxform.setValue({
    $key:box.id,
    name:box.name,
    description:box.description,
    image:box.image,
    quantity:box.quantity,
    price:box.price,
    color:box.color,
    cover:box.cover
  });

}
////////////////////////////Today Dish Functions //////////////////
getDishs(){
  return this.http.get(`http://localhost:8080/api/dishs`);}
  InsertDish(dish:any){
    let DishInsert={name:dish.name,description:dish.description,image:dish.image,quantity:dish.quantity,price:dish.price}
    this.http.post(`http://localhost:8080/api/dish`,DishInsert,{responseType: "text",}).subscribe((data)=>{
      console.log(data);
    })
  }
  UpdateDish(dish){
    this.http.put(`http://localhost:8080/api/dish/`+dish.$key,dish,{responseType:"text"}).subscribe((data)=>{
      console.log(data);
    })
  }
  DeleteDish($key){
    console.log($key);
    return this.http.delete(`http://localhost:8080/api/dish/${$key}`,{responseType:"text"});
  }
    

  
}

