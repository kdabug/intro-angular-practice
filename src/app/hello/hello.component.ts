import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent implements OnInit {
  myvariable = "mikayda";
  bitwiseOR = 2 | 5;
  i = 0;
  //somewar to indicate that angular is changing
  //because will create a new random wariable and will show how many times
  //lifecycle method is unecessarily called by including the called function
  //in the component
  someVar = Math.random();
  constructor() {}

  doSomethingHeavyTask() {
    console.log(
      "this is the do something heavy task function",
      `this is called ${this.i++} times`
    );
  }
  ngOnInit() {
    setInterval(() => {
      this.someVar = Math.random();
    }, 50);
  }
}
