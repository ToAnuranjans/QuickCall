import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CategoryPage } from "./category.page";

const routes: Routes = [
  {
    path: "",
    component: CategoryPage
  },
  {
    path: ":categoryId",
    loadChildren:
      "./category-detail/category-detail.module#CategoryDetailPageModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
