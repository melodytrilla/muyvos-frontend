import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login.entities';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  urlBase: string;
  httpOptions: {};

  constructor(
    private http: HttpClient
  ) { 
    this.urlBase = "https://localhost:44310/api/Usuarios/";
    this.httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Max-Age': '86400'
      }),
      responseType: 'json',
      // withCredentials: true,
    };
  }
  
  getUsers(): Observable<User[]> {
    const apiUrl = this.urlBase + 'GetUsuarios';
    return this.http.get<User[]>(apiUrl, this.httpOptions);
  }

}
