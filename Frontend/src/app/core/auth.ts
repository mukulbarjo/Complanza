import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth {

   private baseUrl = 'http://localhost:8080/api/auth';

   login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
   
   register(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/register`, data, {
    responseType: 'text' as const   // ✅ THIS LINE IS NEEDED
  });
}

  constructor(private http: HttpClient) { }
}
