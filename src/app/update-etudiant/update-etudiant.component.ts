import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent {
  id: number=4;
  etudiant: Etudiant = new Etudiant();
  constructor(private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.etudiant = new Etudiant();
    this.etudiantService.getetudiantById(this.id).subscribe( data => {
      this.etudiant = data;
    });
  }

  onSubmit(){
    this.etudiantService.updateetudiant(this.id, this.etudiant).subscribe( data =>{
      this.goToetudiantList();
    }
    , error => console.log(error));
  }

  goToetudiantList(){
    this.router.navigate(['/etudiant']);
  }
}
