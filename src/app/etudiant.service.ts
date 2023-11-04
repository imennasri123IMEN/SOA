import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseURL = "http://localhost:8081/etudiant";
  constructor(private httpClient: HttpClient) { }
  
  getetudiantList(): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(`${this.baseURL}`);
  }
  createetudiant(etudiant: Etudiant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, etudiant);
  }
  getetudiantById(id: number): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(`${this.baseURL}/${id}`);
  }

  updateetudiant(id: number, etudiant: Etudiant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, etudiant);
  }
 
  deleteetudiant(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
 

}
