import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { FormsModule } from '@angular/forms';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { TauxReussiteComponent } from './taux-reussite/taux-reussite.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    CreateEtudiantComponent,
    EtudiantDetailsComponent,
    UpdateEtudiantComponent,
    CreateAdminComponent,
    AdminDetailsComponent,
    AdminListComponent,
    UpdateAdminComponent,
    TauxReussiteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
