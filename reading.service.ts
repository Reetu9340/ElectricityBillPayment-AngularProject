import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {
  private baseUrl = 'http://localhost:8080/reading';

  constructor(private http: HttpClient) { }


  createReading(reading : object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}/SubmitReading`, reading);
  }

  
   getReadingList() : Observable<any> {
     return this.http.get(`${this.baseUrl}/all`);
  }
  getReadingnId(readingnId : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${readingnId}`)
  }

  updateReading(readingnId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifyCustomer`, value);
  }

 
}
