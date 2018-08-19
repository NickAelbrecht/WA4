import { ClubDetailComponent } from "./club-detail/club-detail.component";
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
import { ClubResolver } from "./club-resolver";
import {
  httpInterceptorProviders,
  basehttpInterceptorProviders
} from "../http-interceptors";
import { ClubFilter2Pipe } from "./club-filter2.pipe";
import { ClubFilter3Pipe } from "./club-filter3.pipe";
import { InfopaginaComponent } from "./infopagina/infopagina.component";
import { HomepaginaComponent } from "./homepagina/homepagina.component";
import { ClubSorteerPipe } from "./club-sorteer.pipe";
import { RatingComponent } from './rating/rating.component';

const routes = [
  { path: "list", component: ClubListComponent },
  { path: "add", component: AddClubComponent },
  { path: "info", component: InfopaginaComponent },
  { path: "home", component: HomepaginaComponent },
  {
    path: ":id",
    component: ClubDetailComponent,
    resolve: { club: ClubResolver }
  }
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
    ClubDetailComponent,
    ClubFilter2Pipe,
    ClubFilter3Pipe,
    InfopaginaComponent,
    HomepaginaComponent,
    ClubSorteerPipe,
    RatingComponent
  ],
  providers: [
    basehttpInterceptorProviders,
    httpInterceptorProviders,
    ClubDataService,
    ClubResolver
  ]
})
export class ClubModule {}
