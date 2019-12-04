import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from './models/customers';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiURL = 'https://mysterious-peak-14776.herokuapp.com/customer';
  constructor(private httpClient: HttpClient) { }

getCustomers(): Observable<Customers[]> {
  return this.httpClient.get<Customers[]>(this.apiURL);
}
postCustomer(customer: Customers): Observable<Customers> {
  return this.httpClient.post<Customers>(this.apiURL, customer, httpOptions);
}
getCustomerById(id: string): Observable<Customers> {
  return this.httpClient.get<Customers>(this.apiURL + id);
  }

}
