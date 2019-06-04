import { Injectable } from "@angular/core";
import { Category } from "./category.model";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  private _categories: Category[] = [
    new Category("100", "Electronics", "electronics", "L100", true),
    new Category("101", "Electronics", "electronics", "L100", true),
    new Category("102", "Electronics", "electronics", "L100", false),
    new Category("103", "Electronics", "electronics", "L100", true),
    new Category("104", "Electronics", "electronics", "L100", false),
    new Category("105", "Electronics", "electronics", "L100", true),
    new Category("106", "Electronics", "electronics", "L100", false),
    new Category("107", "Electronics", "electronics", "L100", true),
    new Category("108", "Electronics", "electronics", "L100", false),
    new Category("109", "Electronics", "electronics", "L100", true)
  ];

  get categories(): Observable<Category[]> {
    return of(this._categories).pipe(delay(3000));
  }

  constructor() {}
}
