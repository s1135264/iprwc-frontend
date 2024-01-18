import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {WebsiteService} from "../../websiteService";

@Component({
  selector: 'app-dashboard-cart-widget',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard-cart-widget.component.html',
  styleUrl: './dashboard-cart-widget.component.css'
})
export class DashboardCartWidgetComponent {
  websiteService = new WebsiteService();
  baseUrl = this.websiteService.getBaseUrl();

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  endpointValidateAccount = "/api/v1/account/validate"
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
          this.onWidgetClick("cart");
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
