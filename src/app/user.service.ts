import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface myData {
  message: string;
  success: boolean;
}

interface myExpressData {
  email: string;
  status: boolean;
  quote: string;
}

interface isLoggedIn {
  status: boolean;
}

interface logoutStatus {
  success: boolean;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getExpressData() {
    return this.http.get<myExpressData>("/api/data");
  }

  getSomeData() {
    return this.http.get<myData>("/api/database.php");
  }
  //if using user service to check if logged in RATHER than localstorage
  isLoggedIn(): Observable<isLoggedIn> {
    //using php api (in test folder in app)
    //return this.http.get<isLoggedIn>("/api/isloggedin.php");

    //using mongodb and express-sessions
    return this.http.get<isLoggedIn>("/api/isloggedin");
  }

  logout() {
    //using php api (in test folder in app)
    //return this.http.get<logoutStatus>("/api/logout.php");

    //using express sessions
    return this.http.get<logoutStatus>("/api/logout");
  }
}
