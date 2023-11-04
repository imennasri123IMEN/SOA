import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent {
  etudiant : Etudiant = new Etudiant();
  constructor(private etudiantService: EtudiantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveetudiant(){
    this.etudiantService.createetudiant(this.etudiant).subscribe( data =>{
      console.log(data);
      this.goToetudiantList();
    },
    error => console.log(error));
  }

  goToetudiantList(){
    this.router.navigate(['/etudiant']);
  }
  
  onSubmit(){
    console.log(this.etudiant);
    this.saveetudiant();
  }
}
