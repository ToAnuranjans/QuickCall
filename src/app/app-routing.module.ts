import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./features/auth/login/login.module#LoginPageModule"
  },
  {
    path: "user",
    loadChildren: "./features/auth/user/user.module#UserPageModule"
  },
  {
    path: "home",
    loadChildren: "./features/home/home.module#HomePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
