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
    this.checkLoginStatus();
    // this.checkIfSeller();
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

        if (isValid === "true"){
          this.loginIcon = "login";
          this.loginIconRoute = "/dashboard";
          return;
        } else {
          this.loginIcon = "logout";
          this.loginIconRoute = "/login-page";
        }

      } , (error) => {
        console.log(error);
        // this.cookie.delete("token");
        // this.checkLoginStatus();
      });

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
      // console.log(data);

      this.http.post(url, data).subscribe((response) =>{
        // console.log(response);
      } , (error) => {
        console.log(error);
      } );


      this.cookie.delete("token");
      this.checkLoginStatus();


      this.navigateTo("/dashboard");
    }
  }

  onCartButtonClick(){
    this.checkLoginStatus();

    if (this.loginIcon == "login"){
      window.location.href = "/cart";
    } else {
      window.location.href = "/login-page";
    }

  }

  adminButtonStyle = "none";
  // adminButtonStyle = "display";


  onAdminButtonClick(){
    //if seller, go to seller page
    window.location.href = "/seller";
  }

  endpointValidateSeller = "api/v1/account/role"
  // checkIfSeller(){
  //   //validate with endpoint
  //   let url = this.baseUrl + this.endpointValidateSeller;
  //   let token = this.cookie.get("token");
  //   let data = {
  //     "sessionUuid": token
  //   };
  //   let isValid;
  //   console.log(data);
  //
  //   if (token.length == 0){
  //     this.adminButtonStyle = "none";
  //     return;
  //   }
  //
  //   this.http.post(url, data).subscribe((response) =>{
  //     // console.log(response);
  //     isValid = response.toString();
  //     isValid = isValid.toLowerCase();
  //     console.log("is seller: " + isValid);
  //
  //     if (isValid === "true"){
  //       this.adminButtonStyle = "display";
  //       return;
  //     } else {
  //       this.adminButtonStyle = "none";
  //       return;
  //     }
  //
  //   } , (error) => {
  //     // console.log(error);
  //     this.adminButtonStyle = "none";
  //   });
  // }

}
