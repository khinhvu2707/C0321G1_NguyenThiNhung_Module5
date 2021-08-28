import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private URL= 'http://localhost:3000/product';
  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  saveProduct(product) {
    return this.http.post<Product>(this.URL,product)
  }

  findById(productId: number): Observable<Product> {
    return this.http.get<Product>(this.URL +'/'+productId)
  }

  updateProduct(id: number, product: Product): Observable<Product> {
   return this.http.put<Product>(this.URL+'/'+id,product);
  }

  deleteProduct(id: number): Observable<Product> {
   return  this.http.delete<Product>( this.URL+'/'+id);
  }
}
