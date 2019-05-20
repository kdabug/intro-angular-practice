import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface myData {
  obj: Array<Object>;
}

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //move subcribe to the component
  getData() {
    return this.http.get<myData>("/api/file.php");
  }
}
