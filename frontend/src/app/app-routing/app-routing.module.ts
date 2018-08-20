import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { AuthGuardService } from "../user/auth-guard.service";
import { SelectivePreloadStrategy } from "./SelectivePreloadStrategy";

/*const appRoutes: Routes = [
  { path: "", redirectTo: "club-list", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];*/
const appRoutes: Routes = [
  {
    path: "club",
    canActivate: [AuthGuardService],
    loadChildren: "app/club/club.module#ClubModule",
    data: { preload: true }
  },
  { path: "", redirectTo: "club/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: SelectivePreloadStrategy
    })
  ],
  providers: [SelectivePreloadStrategy],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
