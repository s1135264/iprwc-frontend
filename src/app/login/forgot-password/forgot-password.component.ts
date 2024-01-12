import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = this.email + ' has been sent a reset link.';
  waringStyle: string = 'display: none; color: red;';

  reset() {
    console.log(this.email);

    if (this.email == '') {
      this.showWarning();
      return;
    }

    this.message = this.email + ' will recieve an email within 3 to 5 business months.';
    this.waringStyle = 'display: contents; color: green;';
  }

  showWarning() {
    this.message = 'Please enter a valid email address.';
    this.waringStyle = 'display: contents; color: red;';
  }
}
