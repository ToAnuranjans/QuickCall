import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _userIsAuthenticated = false;

  constructor() {}

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  login(email: string, password: string): Observable<boolean> {
    this._userIsAuthenticated = true;

    return of(true).pipe(delay(3000));
  }
}
