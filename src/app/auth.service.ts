import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getUserDetails(username, password) {
    //post details to api server and return user info if correct
    return this.http
      .post("/api/auth.php", {
        username,
        password
      })
      .subscribe(data => console.log(data, " is what we got from the server"));
  }
}
