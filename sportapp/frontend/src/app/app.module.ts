import { UserModule } from './user/user.module';
import { ClubModule } from "./club/club.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ClubComponent } from "./club/club/club.component";
import { AddClubComponent } from "./club/add-club/add-club.component";
import { ClubListComponent } from "./club/club-list/club-list.component";
import { SportComponent } from "./club/sport/sport.component";
import { ClubDetailComponent } from "./club/club-detail/club-detail.component";
import { HomepaginaComponent } from "./club/homepagina/homepagina.component";
import { ClubFilterPipe } from "./club/club-filter.pipe";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";

/*const appRoutes: Routes = [
  { path: 'club-list', component: ClubListComponent },
  { path: 'add-club', component: AddClubComponent },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];*/

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    //ClubModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
