import { Component } from '@angular/core';
import { admin } from '../admin';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  admin : admin = new admin();
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveadmin(){
    this.adminService.createadmin(this.admin).subscribe( data =>{
      console.log(data);
      this.goToadminList();
    },
    error => console.log(error));
  }

  goToadminList(){
    this.router.navigate(['/admin']);
  }
  
  onSubmit(){
    console.log(this.admin);
    this.saveadmin();
  }
}
