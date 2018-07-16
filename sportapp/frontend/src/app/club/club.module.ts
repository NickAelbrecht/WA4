import { ClubDetailComponent } from "./club-detail/club-detail.component";
import { HomepaginaComponent } from "./homepagina/homepagina.component";
import { ClubListComponent } from "./club-list/club-list.component";
import { NgModule } from "@angular/core";
import { ClubComponent } from "./club/club.component";
import { SportComponent } from "./sport/sport.component";
import { AddClubComponent } from "./add-club/add-club.component";
import { ClubFilterPipe } from "./club-filter.pipe";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ClubDataService } from "./club-data.service";
import { RouterModule } from "@angular/router";

const routes = [
  { path: "club-list", component: ClubListComponent },
  { path: "add-club", component: AddClubComponent },
  { path: 'club-detail/:id', component: ClubDetailComponent}
];


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ClubComponent,
    SportComponent,
    AddClubComponent,
    ClubFilterPipe,
    ClubListComponent,
    HomepaginaComponent,
    ClubDetailComponent
  ],
  providers: [ClubDataService]
})
export class ClubModule {}