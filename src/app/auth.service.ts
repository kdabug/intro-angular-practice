import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface myData {
  success: boolean;
  message: string;
}
@Injectable({
  providedIn: "root"
})
export class AuthService {
  //using local storage
  // private loggedInStatus = JSON.parse(
  //   localStorage.getItem("loggedIn") || "false"
  // );
  private loggedInStatus = false;
  constructor(private http: HttpClient) {}

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem("loggedIn", "true");
  }

  get isLoggedIn() {
    return this.loggedInStatus;
    //localstorage
    // return JSON.parse(
    //   localStorage.getItem("loggedIn") || this.loggedInStatus.toString()
    // );
  }

  getUserDetails(username, password) {
    //post details to api server and return user info if correct
    return this.http.post<myData>("/api/auth.php", {
      username,
      password
    });
    // .subscribe(data => console.log(data, " is what we got from the server"));
  }
}
