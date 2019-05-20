import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { RoutingComponent } from "./routing/routing.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "routing", component: RoutingComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
