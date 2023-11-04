import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TauxReussiteService {
  private apiUrl = 'http://localhost:8081/etudiant/taux-reussite'; // Remplacez par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  getTauxReussite() {
    return this.http.get<number>(this.apiUrl);
  }
}
