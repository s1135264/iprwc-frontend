import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  loginIcon = "logout";
  shopRoute = "/shop/";
  searchBar  = "";
  loginIconRoute = "/login-page";
  router : Router;

  constructor(router : Router, private http: HttpClient, private cookie: CookieService) {
    this.router = router;
    this.checkLoginStatus()
  }

  onSearchButtonClick(){
    //wait for 0.5 seconds before navigating to the shop page
    setTimeout(() => {
      this.navigateTo(this.shopRoute);
    }, 5);
  }

  navigateTo(whereTo : string){
    this.router.navigate([whereTo],
      {queryParams: {filter: this.searchBar}}
      );
  }

  checkLoginStatus(){

    let token = this.cookie.get("token");
    if(token.length > 0){
      this.loginIcon = "login";
      this.loginIconRoute = "/dashboard";
    } else {
      this.loginIcon = "logout";
      this.loginIconRoute = "/login-page";
    }
  }

  baseUrl = "http://127.0.0.1:8080/"
  endpointLogoutAccount = "api/v1/account/logout"
  onAccountButtonClick(){
    //delete cookies
    if (this.loginIcon == "login"){

      //delete session from database
      let url = this.baseUrl + this.endpointLogoutAccount;
      let data = this.cookie.get("token");
      // data = '"' + data + '"';
      console.log(data);

      this.http.post(url, data).subscribe((response) =>{
        console.log(response);
      } , (error) => {
        console.log(error);
      } );


      this.cookie.delete("token");
      this.checkLoginStatus();


      this.navigateTo("/dashboard");
    }
  }

}
