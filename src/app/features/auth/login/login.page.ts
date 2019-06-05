import { Component, OnInit, OnDestroy } from "@angular/core";
import { Login } from "./login.model";
import { NavController, LoadingController } from "@ionic/angular";
import { UserService } from "src/app/core/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit, OnDestroy {
  login: Login = new Login("", "");

  loginSubscription: Subscription;

  constructor(
    private navController: NavController,
    private userService: UserService,
    private loadingController: LoadingController
  ) {}

  onLoginFormSubmit() {
    this.loadingController
      .create({
        message: "Loading.."
      })
      .then(loadingElem => {
        loadingElem.present();
        this.loginSubscription = this.userService
          .login(this.login.email, this.login.password)
          .subscribe(
            r => {
              this.navController.navigateRoot("/home");
            },
            err => console.log(err),
            () => {
              loadingElem.dismiss();
            }
          );
      });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
