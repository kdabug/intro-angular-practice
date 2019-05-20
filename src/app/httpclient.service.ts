import { Injectable } from "@angular/core";
import { getLocaleDateFormat } from "@angular/common";
import { HttpClient } from "@angular/common/http";
//NOTE: make sure to start the server with command
//php -S localhost:1234
interface myData {
  obj: Array<Object>;
}
@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  //move subcribe to the component
  getData() {
    return this.http.get<myData>("http://localhost:1234/file.php");
    // .subscribe(data => {
    //   console.log("we got the data:", data.obj);
    // });
  }
  //export to ngform through provider in app.module
}
