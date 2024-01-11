import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  firstName = "";
  lastName = "";
  email = "";
  phoneNumber = "";
  dateOfBirth = "";
  username = "";
  password1 = "";
  password2 = "";


  showPassword1 = false;
  showPassword2 = false;
  showPasswordStyling1 = "password";
  showPasswordStyling2 = "password";

  toggleShowPassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.showPassword1) {
      this.showPasswordStyling1 = "text";
    } else {
      this.showPasswordStyling1 = "password";
    }
  }

  toggleShowPassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.showPassword2) {
      this.showPasswordStyling2 = "text";
    } else {
      this.showPasswordStyling2 = "password";
    }
  }

  //add a function to check if the username and password are correct
  warningStyle = "display: none;";
  showWarning = "contents";
  warning = "Something is wrong!";
  createAccountAttempt() {

    if (this.firstName == "") {
      this.warning = "First name is empty!";
      this.showError();
      return;
    }
    if (this.lastName == "") {
      this.warning = "Last name is empty!";
      this.showError();
      return;
    }
    if (this.email == "") {
      this.warning = "Email is empty!";
      this.showError();
      return;
    }
    if (this.phoneNumber == "") {
      this.warning = "Phone number is empty!";
      this.showError();
      return;
    }
    if (this.dateOfBirth == "") {
      this.warning = "Date of birth is empty!";
      this.showError();
      return;
    }
    if (this.username == "") {
      this.warning = "Username is empty!";
      this.showError();
      return;
    }
    if (this.password1 == "") {
      this.warning = "Password is empty!";
      this.showError();
      return;
    }
    if (this.password2 == "") {
      this.warning = "Password is empty!";
      this.showError();
      return;
    }
    if (this.password1 != this.password2) {
      this.warning = "Passwords do not match!";
      this.showError();
      return;
    }

    console.log("First Name: " + this.firstName + "\nLast Name: " + this.lastName + "\nEmail: " + this.email + "\nPhone Number: " + this.phoneNumber + "\nDate of Birth: " + this.dateOfBirth + "\nUsername: " + this.username + "\nPassword: " + this.password1 + "\nPassword2: " + this.password2);
    window.location.href = "/dashboard"; //reroute to dashboard page if login is successful
  }

  showError() {
    this.warningStyle = "display: " + this.showWarning + ";";
  }

}
