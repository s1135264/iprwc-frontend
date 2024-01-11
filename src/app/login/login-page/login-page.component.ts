import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
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



  //add a function to check if the username and password are correct
  loginAtempt() {
    this.warningStyle = "display: " + this.showWarning + ";";
    console.log("Username: " + this.username + " Password: " + this.password); //debugging
    // window.location.href = "/dashboard"; //reroute to dashboard page if login is successful
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.showPasswordStyling = "text";
    } else {
      this.showPasswordStyling = "password";
    }
  }
}
