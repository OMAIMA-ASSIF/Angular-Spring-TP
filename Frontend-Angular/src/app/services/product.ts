import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root', //pour que ce service soit accessible a touts les composants
})
export class ProductService {
  constructor(private http : HttpClient) {
  }

  getAllProducts(){
    return this.http.get("http://localhost:8084/products");
  }

  deleteProduct(product: any){
    return this.http.delete("http://localhost:8084/products/"+ product.id);
  }
}
