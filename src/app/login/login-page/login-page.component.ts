import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  username = "";
  password = "";
  warning = "Something went wrong!";
  showWarning = "contents";
  hideWarning = "none";
  warningStyle = "display: " + this.hideWarning + ";";
  showPassword = false;
  showPasswordStyling = "password";


  constructor(private http: HttpClient, private cookie: CookieService) {
  }

//add a function to check if the username and password are correct
  loginAtempt() {
    // this.warningStyle = "display: " + this.showWarning + ";";
    // console.log("Username: " + this.username + " Password: " + this.password); //debugging
    // window.location.href = "/dashboard"; //reroute to dashboard page if login is successful
    this.submitCreds();
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.showPasswordStyling = "text";
    } else {
      this.showPasswordStyling = "password";
    }
  }

  baseUrl = "http://127.0.0.1:8080/"
  endpointLoginAccount = "api/v1/account/login"
  submitCreds(){
    let url = this.baseUrl + this.endpointLoginAccount;

    let data = {
      "username": this.username,
      "password": this.password
    }

    this.http.post(url, data).subscribe((response) =>{
      //save cookies
      this.cookie.set("token", response.toString());
      // console.log("Session Token: " + this.cookie.get("sessionToken"));
      window.location.href = "/dashboard"
    }, (error) => {
      this.warning = "Incorrect username or password combination.";
      this.warningStyle = "display: " + this.showWarning + ";";
    });

  }
}
