import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit() {}
  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    const cpassword = target.querySelector("#cpassword").value;

    if (password != cpassword) {
      errors.push("Passwords do not match");
    }

    //more validation like querying
    if (errors.length > 0) {
    }
    console.log("username & pass", username, password);
  }
}
