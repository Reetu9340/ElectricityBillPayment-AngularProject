import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private baseUrl = 'http://localhost:8080/connection';

  constructor(private http: HttpClient) { }

  
  createConnection(connection : object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/addConnection`, connection);
  }
  getConnectionList() : Observable<any> {
     return this.http.get(`${this.baseUrl}/all`);
  }
  getConnectionId(connectionId : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${connectionId}`)
  }

  getConnectionByAddhar(addharNumber : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/addhar/${addharNumber}`)
  }

  getConnectionName(userName : number) :Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${userName}`);
  }

  updateConnection  (connectionId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifyConnection`, value);
  }

  deleteConnection(consumerNumber: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${consumerNumber}`, { responseType: 'text' });
  }


}
