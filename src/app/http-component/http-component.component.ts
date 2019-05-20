import { HttpClientService } from "./../httpclient.service";
import { HttpClient } from "@angular/common/http";
import { RecordsService } from "./../records.service";
import { Component, OnInit } from "@angular/core";

interface myData {
  obj: Array<Object>;
}

@Component({
  selector: "app-http-component",
  templateUrl: "./http-component.component.html",
  styleUrls: ["./http-component.component.css"]
})
export class HttpComponentComponent implements OnInit {
  //initial
  records = [];

  constructor(private myFirstService: HttpClientService) {}

  ngOnInit() {
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj;
    });
  }
}
