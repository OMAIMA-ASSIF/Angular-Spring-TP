import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //pour que ce service soit accessible a touts les composants
})
export class ProductService {
  products = [
    {id : 1, name : "Computer", price : 2300, selected : true},
    {id : 2, name : "Printer", price : 1200, selected : false},
    {id : 3, name : "Smart Phone", price : 1100, selected : true}
  ]
  constructor() {
  }

  getAllProduct(){
    return this.products
  }

  deleteProduct(product: any){
    this.products = this.products.filter((p:any)=>p.id != product.id);
  }

}
