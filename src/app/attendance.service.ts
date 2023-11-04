import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:8081/etudiant/calculate';

  constructor(private http: HttpClient) { }

  calculateTauxAbsence() {
    return this.http.get<number>(`${this.apiUrl}`);
  }
}
