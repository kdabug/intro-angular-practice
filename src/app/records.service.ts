import { Injectable } from "@angular/core";
import { getLocaleDateFormat } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class RecordsService {
  constructor() {}
  //export to ngform through provider in app.module
  getData() {
    return [
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
}
