import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "tabs",
    component: HomePage,
    children: [
      {
        path: "categories",
        loadChildren: "./category/category.module#CategoryPageModule"
      },
      {
        path: "bookmarks",
        loadChildren: "./bookmarks/bookmarks.module#BookmarksPageModule"
      },
      {
        path: "",
        redirectTo: "categories",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/tabs/categories"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
