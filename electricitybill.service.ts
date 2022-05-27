import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectricitybillService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http : HttpClient) { }
  
  createUser(user : object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  loginUser(user : object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
  
  loginAdmin(user : object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user);
  } 
  getUserList() : Observable<any> {
     return this.http.get(`${this.baseUrl}/all`);
  }

  getUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${userId}`);
  }
  updateUser(userId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifyUser`, value);
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${userId}`, { responseType: 'text' });
  }

}
