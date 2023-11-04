import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent {
  id!: number;
  etudiant: Etudiant = new Etudiant;
  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    
    this.etudiantService.getetudiantById(this.id).subscribe( data => {
      this.etudiant = data;
    });
  }

}
