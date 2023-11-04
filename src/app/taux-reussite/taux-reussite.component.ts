import { Component, OnInit } from '@angular/core';
import { TauxReussiteService } from '../taux-reussite.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-taux-reussite',
  templateUrl: './taux-reussite.component.html',
  styleUrls: ['./taux-reussite.component.css']
})
export class TauxReussiteComponent implements OnInit {
  tauxReussite: number | undefined;
  tauxAbsence!: number;
  constructor(private tauxReussiteService: TauxReussiteService,private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceService.calculateTauxAbsence()
    .subscribe(tauxAbsence => {
      this.tauxAbsence = tauxAbsence;
    });

    this.tauxReussiteService.getTauxReussite().subscribe(
      (data) => {
        this.tauxReussite = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération du taux de réussite', error);
      }
    );
  }
}
