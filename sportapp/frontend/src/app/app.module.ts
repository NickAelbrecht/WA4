import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClubComponent } from './club/club/club.component';
import { AddClubComponent } from './club/add-club/add-club.component';
import { ClubListComponent } from './club/club-list/club-list.component';
import { SportComponent } from './club/sport/sport.component';
import { ClubDetailComponent } from './club/club-detail/club-detail.component';
import { HomepaginaComponent } from './club/homepagina/homepagina.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    AddClubComponent,
    ClubListComponent,
    SportComponent,
    ClubDetailComponent,
    HomepaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
