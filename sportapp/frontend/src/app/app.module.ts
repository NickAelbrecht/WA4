import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClubComponent } from './club/club/club.component';
import { AddClubComponent } from './club/add-club/add-club.component';
import { ClubListComponent } from './club/club-list/club-list.component';
import { SportComponent } from './club/sport/sport.component';
import { ClubDetailComponent } from './club/club-detail/club-detail.component';
import { HomepaginaComponent } from './club/homepagina/homepagina.component';
import { ClubFilterPipe } from './club/club-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    AddClubComponent,
    ClubListComponent,
    SportComponent,
    ClubDetailComponent,
    HomepaginaComponent,
    ClubFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
