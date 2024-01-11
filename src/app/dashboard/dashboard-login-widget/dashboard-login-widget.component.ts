import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

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

}
