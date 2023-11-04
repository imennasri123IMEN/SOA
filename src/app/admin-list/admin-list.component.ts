import { Component } from '@angular/core';
import { admin } from '../admin';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {
  admins: admin[] = [];
  id!:number;

  admin: admin=new admin();
  constructor(private adminService : AdminService ,private router:Router){

  }

  ngOnInit(): void{
    this.getadmin();
    
  }
  private getadmin(){
    this.adminService.getadminList().subscribe(data => {
      this.admins = data;
    });
  
}
adminDetails(ids:number){
  this.router.navigate(['admin-details', ids]);
}
updateadmin(ids:number){
  this.router.navigate(['update-admin', ids]);
}
 deleteadmin(id:number){
  this.adminService.deleteadmin(id).subscribe(_data => {
    alert('this student is deleted')
    this.getadmin();
  });

}
}
