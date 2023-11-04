import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { admin } from "./admin";


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = "http://localhost:8081/admin";
  constructor(private httpClient: HttpClient) { }
  
  getadminList(): Observable<admin[]>{
    return this.httpClient.get<admin[]>(`${this.baseURL}`);
  }
  createadmin(admin: admin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, admin);
  }
  getadminById(id: number): Observable<admin>{
    return this.httpClient.get<admin>(`${this.baseURL}/${id}`);
  }

  updateadmin(id: number, admin: admin): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,admin);
  }

  deleteadmin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
