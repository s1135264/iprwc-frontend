import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-dashboard-login-widget',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard-login-widget.component.html',
  styleUrl: './dashboard-login-widget.component.css'
})
export class DashboardLoginWidgetComponent {


  baseUrl = "http://127.0.0.1:8080/";

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  endpointValidateAccount = "api/v1/account/validate"
  checkLoginStatus(){

    let token = this.cookie.get("token");
    if(token.length > 0){


      //validate with endpoint
      let url = this.baseUrl + this.endpointValidateAccount;
      let data = token;
      let isValid;
      // console.log(data);

      this.http.post(url, data).subscribe((response) =>{
        // console.log(response);
        isValid = response.toString();
        isValid = isValid.toLowerCase();

        if(isValid == "true"){
          //reroute to dashboard
          this.onWidgetClick("dashboard");
        } else {
          //reroute to login page
          this.onWidgetClick("login-page");
        }

      } , (error) => {
        console.log(error);
        // this.cookie.delete("token");
        // this.checkLoginStatus();
      });

    } else {
      //reroute to login page
      window.location.href = "/login-page";
    }
  }

  onWidgetClick(place: string) {

    //reroute to dashboard page
    window.location.href = "/" + place;
  }

}
