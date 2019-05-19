import { Component } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent {
  myvariable = "app";
  myDisabledValue = false;
  constructor() {
    this.myvariable = "";
    this.myDisabledValue = false;
    setInterval(() => {
      this.myvariable = Math.random().toString();
      this.myDisabledValue = Math.random() > 0.5;
    }, 1000);
  }

  callMyFunction() {
    this.myDisabledValue = true;
    console.log("Function Called!");
  }
}
