import { Component } from "@angular/core";

@Component({
  selector: "app-ngform",
  templateUrl: "./ngform.component.html",
  styleUrls: ["./ngform.component.css"]
})
export class NgformComponent {
  records = [
    {
      name: "mikayda",
      online: true
    },
    {
      name: "fred",
      online: true
    },
    {
      name: "liam",
      online: false
    },
    {
      name: "mikayda",
      online: true
    },
    {
      name: "fred",
      online: true
    },
    {
      name: "liam",
      online: false
    }
  ];
}
