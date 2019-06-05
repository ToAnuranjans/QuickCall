import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.page.html",
  styleUrls: ["./user.page.scss"]
})
export class UserPage implements OnInit {
  imageUrl =
    "https://secure.gravatar.com/avatar/bee6225516ca355476da2315c729b208";

  constructor() {}

  ngOnInit() {}
}
