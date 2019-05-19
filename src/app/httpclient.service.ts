import { Injectable } from "@angular/core";
import { getLocaleDateFormat } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private http: HttpClient) {}
  //export to ngform through provider in app.module
}
