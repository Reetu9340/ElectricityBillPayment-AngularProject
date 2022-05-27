import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) { }

  createCustomer(customer : object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/addCustomer`, customer);
  }

  
   getCustomerList() : Observable<any> {
     return this.http.get(`${this.baseUrl}/all`);
  }
  getCustomerId(customerId : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${customerId}`)
  }

  getCustomerByAddhar(addharNumber : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/addhar/${addharNumber}`)
  }

  getUserName(userName : number) :Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${userName}`);
  }

  updateCustomer(customerId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifyCustomer`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
