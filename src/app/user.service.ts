import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface myData {
  message: string;
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
}
