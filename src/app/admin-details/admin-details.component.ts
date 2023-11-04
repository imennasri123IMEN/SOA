import { Component } from '@angular/core';
import { admin } from '../admin';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {
  id!: number;
  admin: admin = new admin;
  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    
    this.adminService.getadminById(this.id).subscribe( data => {
      this.admin = data;
    });
}}
