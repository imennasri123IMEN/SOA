import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { admin } from './admin';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { TauxReussiteComponent } from './taux-reussite/taux-reussite.component';


const routes: Routes = [
  {path: 'etudiant', component: EtudiantListComponent},
  {path: 'create-etudiant', component: CreateEtudiantComponent},
  {path: 'update-etudiant/:id', component: UpdateEtudiantComponent},
  {path: 'etudiant-details/:id', component: EtudiantDetailsComponent},
  {path: 'etudiant-list', component: EtudiantListComponent},
  {path: 'admin-listAdmin', component: AdminListComponent},
  {path: 'admin', component: AdminListComponent},
  {path: 'admin-details/:id', component: AdminDetailsComponent},
  {path: 'update-admin/:id', component: UpdateAdminComponent},
  {path: 'create-admin', component: CreateAdminComponent},
  {path: 'resultas', component: TauxReussiteComponent},

 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
