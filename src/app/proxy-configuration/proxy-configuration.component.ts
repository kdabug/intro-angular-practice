import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

interface myData {
  obj: Array<Object>;
}
@Component({
  selector: "app-proxy-configuration",
  templateUrl: "./proxy-configuration.component.html",
  styleUrls: ["./proxy-configuration.component.css"]
})
export class ProxyConfigurationComponent implements OnInit {
  //initial
  records = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get<myData>("/api/file.php");
  }
}

// | Angular 4200 | --> makes an API call --> | API server 1234 |
// | Angular 4200 |--> make API call to /api/* --> webpack dev server --> | API Server 1234 |

//add proxyconfig.json file and look at the package.json
// add this to scripts -> "start": "ng serve --proxy-config proxyconfig.json",
//proxy of api  endpoint that will redirect to the target and gets response back from target
