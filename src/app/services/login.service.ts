import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }
  getData(data:any):Observable<any>{
    return this._httpClient.post("https://reqres.in/api/login",data)
  }
}
