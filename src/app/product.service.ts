// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  // CREATE
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // READ
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  // UPDATE
  updateProduct(updatedProduct: Product): Observable<Product> {
    const url = `${this.apiUrl}/${updatedProduct.id}`;
    return this.http.put<Product>(url, updatedProduct);
  }

  // DELETE
  deleteProduct(upc: string): Observable<void> {
    const url = `${this.apiUrl}/${upc}`;
    return this.http.delete<void>(url);
  }
}
