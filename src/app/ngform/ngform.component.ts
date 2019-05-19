import { HttpClientService } from "./../httpclient.service";
import { HttpClient } from "@angular/common/http";
import { RecordsService } from "./../records.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngform",
  templateUrl: "./ngform.component.html",
  styleUrls: ["./ngform.component.css"]
})
export class NgformComponent implements OnInit {
  //initial
  records = {};

  constructor(private myFirstService: RecordsService) {}

  ngOnInit() {
    this.records = this.myFirstService.getData();
  }
  //moved to records.services
  // records = [
  //   {
  //     name: "mikayda",
  //     online: true
  //   },
  //   {
  //     name: "fred",
  //     online: true
  //   },
  //   {
  //     name: "liam",
  //     online: false
  //   },
  //   {
  //     name: "mikayda",
  //     online: true
  //   },
  //   {
  //     name: "fred",
  //     online: true
  //   },
  //   {
  //     name: "liam",
  //     online: false
  //   }
  // ];
}
