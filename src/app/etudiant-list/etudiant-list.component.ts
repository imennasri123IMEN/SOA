import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent {
  etudiants: Etudiant[] = [];
  id!:number;

  etudiant: Etudiant=new Etudiant();
  constructor(private etudiantService : EtudiantService ,private router:Router){

  }

  ngOnInit(): void{
    this.getetudiant();
    
  }
  private getetudiant(){
    this.etudiantService.getetudiantList().subscribe(data => {
      this.etudiants = data;
    });
  
}

etudiantDetails(ids:number){
  this.router.navigate(['etudiant-details', ids]);
}
updateetudiant(ids:number){
  this.router.navigate(['update-etudiant', ids]);
}
 deleteetudiant(id:number){
  this.etudiantService.deleteetudiant(id).subscribe(data => {
    alert('this student is deleted')
    this.getetudiant();
  });

}
}
