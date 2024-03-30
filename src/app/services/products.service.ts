import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http:HttpClient) {}

getProducts(){
  return this.http.get<Product[]>("http://localhost:3000/products");
}

}