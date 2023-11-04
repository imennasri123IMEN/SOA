import { Component } from '@angular/core';
import { admin } from '../admin';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent {
  id: number=4;
  admin: admin = new admin();
  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.admin = new admin();
    this.adminService.getadminById(this.id).subscribe( data => {
      this.admin = data;
    });
  }

  onSubmit(){
    this.adminService.updateadmin(this.id, this.admin).subscribe( data =>{
      this.goToadminList();
    }
    , error => console.log(error));
  }

  goToadminList(){
    this.router.navigate(['/admin']);
  }
}
