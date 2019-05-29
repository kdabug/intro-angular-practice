import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface myData {
  message: string;
  success: boolean;
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

  getSomeData() {
    return this.http.get<myData>("/api/database.php");
  }
  //if using user service to check if logged in RATHER than localstorage
  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>("/api/isloggedin.php");
  }

  logout() {
    return this.http.get<logoutStatus>("/api/logout.php");
  }
}
