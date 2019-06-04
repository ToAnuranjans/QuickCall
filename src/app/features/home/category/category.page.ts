import { Component, OnInit } from "@angular/core";
import { CategoryService } from "./category.service";
import { Category } from "./category.model";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"]
})
export class CategoryPage implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadingController
      .create({
        message: "Loading..."
      })
      .then(loadingElem => {
        loadingElem.present();
        this.categoryService.categories.subscribe(
          c => {
            this.categories = c;
          },
          err => console.log(err),
          () => {
            loadingElem.dismiss();
          }
        );
      });
  }
}
