import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Products} from './models/products';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = ' https://desolate-reaches-15540.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.apiURL);
  }

  postProducts(products: Products): Observable<Products> {
    return this.httpClient.post<Products>(this.apiURL, products, httpOptions);
  }
  getProductsById(id: string): Observable<Products> {
    return this.httpClient.get<Products>(this.apiURL + id);
    }

  
}
