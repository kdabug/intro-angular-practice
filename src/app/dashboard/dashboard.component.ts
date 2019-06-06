import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  message = "Loading ....";

  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message;
      //local storage
      if (!data.success) {
        localStorage.removeItem("loggedIn");
      }
    });
  }
}
