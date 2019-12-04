import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customers } from './models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiURL = 'https://mysterious-peak-14776.herokuapp.com/customer';
  constructor(private httpClient: HttpClient) { }

getCustomers(): Observable<Customers[]> {
  return this.httpClient.get<Customers[]>(this.apiURL);
}

}
