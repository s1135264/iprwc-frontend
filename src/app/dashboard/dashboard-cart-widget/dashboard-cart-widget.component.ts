import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

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

}
